import { NextResponse } from "next/server";
import { getUserSession, getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    // 1. Check user session
    const userSession = await getUserSession();
    if (userSession) {
      // Query fresh user info from DB if possible
      const dbUser = await prisma.user.findUnique({
        where: { id: userSession.userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          company: true,
          avatar: true,
          createdAt: true,
        },
      });

      if (dbUser) {
        return NextResponse.json({
          authenticated: true,
          role: dbUser.role,
          user: dbUser,
        });
      }

      return NextResponse.json({
        authenticated: true,
        role: userSession.role,
        user: {
          id: userSession.userId,
          name: userSession.name,
          email: userSession.email,
          role: userSession.role,
          company: userSession.company,
          avatar: userSession.avatar,
        },
      });
    }

    // 2. Check admin session
    const adminSession = await getAdminSession();
    if (adminSession) {
      return NextResponse.json({
        authenticated: true,
        role: "ADMIN",
        user: {
          id: "admin-gunjan",
          name: "Gunjan Kumar Sah (Admin)",
          email: adminSession.adminEmail,
          role: "ADMIN",
          company: "Portfolio Owner",
        },
      });
    }

    return NextResponse.json({
      authenticated: false,
      role: null,
      user: null,
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      { authenticated: false, user: null, error: "Internal server error" },
      { status: 500 }
    );
  }
}
