import { NextResponse } from "next/server";
import { clearAdminSessionCookie, clearUserSessionCookie } from "@/lib/auth";

export async function POST() {
  await clearAdminSessionCookie();
  await clearUserSessionCookie();

  return NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });
}
