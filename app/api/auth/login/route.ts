import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  verifyPassword,
  createUserToken,
  setUserSessionCookie,
  verifyAdminPassword,
  createAdminToken,
  setAdminSessionCookie,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, demoType } = body;

    // 1. Instant 1-Click Demo Profiles
    if (demoType === "recruiter") {
      let recruiter = await prisma.user.findUnique({
        where: { email: "recruiter.demo@techcorp.ai" },
      });

      if (!recruiter) {
        recruiter = await prisma.user.create({
          data: {
            name: "Sarah Chen (Demo Recruiter)",
            email: "recruiter.demo@techcorp.ai",
            role: "RECRUITER",
            company: "Apex AI Ventures",
            avatar: "SC",
          },
        });
      }

      const token = await createUserToken(recruiter);
      await setUserSessionCookie(token);

      return NextResponse.json({
        success: true,
        message: "Signed in as Recruiter Demo",
        user: recruiter,
      });
    }

    if (demoType === "peer") {
      let peer = await prisma.user.findUnique({
        where: { email: "peer.engineer@research.org" },
      });

      if (!peer) {
        peer = await prisma.user.create({
          data: {
            name: "Dr. Marcus Vance (AI Researcher)",
            email: "peer.engineer@research.org",
            role: "USER",
            company: "Geospatial Compute Lab",
            avatar: "MV",
          },
        });
      }

      const token = await createUserToken(peer);
      await setUserSessionCookie(token);

      return NextResponse.json({
        success: true,
        message: "Signed in as AI Peer Demo",
        user: peer,
      });
    }

    if (demoType === "admin") {
      // If admin password provided with demoType or direct admin demo request
      if (!password || !verifyAdminPassword(password)) {
        return NextResponse.json(
          { error: "Invalid Admin Password. Please enter the master admin key." },
          { status: 401 }
        );
      }

      const adminToken = await createAdminToken("gunjansah63@gmail.com");
      await setAdminSessionCookie(adminToken);

      return NextResponse.json({
        success: true,
        message: "Authenticated as Administrator",
        user: {
          id: "admin-gunjan",
          name: "Gunjan Kumar Sah",
          email: "gunjansah63@gmail.com",
          role: "ADMIN",
          company: "Portfolio Owner",
        },
      });
    }

    // 2. Standard Email & Password Authentication
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user is trying to log in with master admin password
    if (email.toLowerCase() === "gunjansah63@gmail.com" && verifyAdminPassword(password)) {
      const adminToken = await createAdminToken(email);
      await setAdminSessionCookie(adminToken);

      return NextResponse.json({
        success: true,
        message: "Authenticated as Administrator",
        user: {
          id: "admin-gunjan",
          name: "Gunjan Kumar Sah",
          email: "gunjansah63@gmail.com",
          role: "ADMIN",
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user || !user.passwordHash) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = await createUserToken(user);
    await setUserSessionCookie(token);

    return NextResponse.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during login" },
      { status: 500 }
    );
  }
}
