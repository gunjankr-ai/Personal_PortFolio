import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminPassword,
  createAdminToken,
  setAdminSessionCookie,
  clearAdminSessionCookie,
  getAdminSession,
} from "@/lib/auth";
import { checkRateLimit } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  try {
    // Brute-force protection: max 5 login attempts per 15 minutes per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(`login_${ip}`, 5, 15 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: `Too many failed login attempts. Please try again in ${rateLimit.reset} seconds.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
    }

    // Generate JWT token & set HTTP-only cookie
    const token = await createAdminToken();
    await setAdminSessionCookie(token);

    return NextResponse.json({ success: true, message: "Logged in successfully" });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, adminEmail: session.adminEmail });
}

export async function DELETE() {
  await clearAdminSessionCookie();
  return NextResponse.json({ success: true, message: "Logged out successfully" });
}
