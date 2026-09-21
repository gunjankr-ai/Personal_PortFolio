import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, createUserToken, setUserSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role, company } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check existing
    const existing = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existing) {
      return NextResponse.json(
        { error: "An account with this email address already exists. Please sign in." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const assignedRole = role === "RECRUITER" ? "RECRUITER" : "USER";

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: cleanEmail,
        passwordHash,
        role: assignedRole,
        company: company ? company.trim() : null,
        avatar: name.trim().slice(0, 2).toUpperCase(),
      },
    });

    const token = await createUserToken(user);
    await setUserSessionCookie(token);

    return NextResponse.json(
      {
        success: true,
        message: "Account successfully created!",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          company: user.company,
          avatar: user.avatar,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during account creation" },
      { status: 500 }
    );
  }
}
