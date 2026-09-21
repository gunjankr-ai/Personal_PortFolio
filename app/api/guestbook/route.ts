import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserSession } from "@/lib/auth";

export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        role: true,
        company: true,
        content: true,
        avatar: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ entries });
  } catch (error) {
    console.error("Failed to fetch guestbook entries:", error);
    return NextResponse.json({ entries: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, company, content } = body;

    if (!content || typeof content !== "string" || content.trim().length < 5) {
      return NextResponse.json(
        { error: "Recommendation content must be at least 5 characters" },
        { status: 400 }
      );
    }

    if (content.trim().length > 500) {
      return NextResponse.json(
        { error: "Recommendation cannot exceed 500 characters" },
        { status: 400 }
      );
    }

    const userSession = await getUserSession();

    let authorName = name?.trim();
    let authorRole = role?.trim() || "Visitor";
    let authorCompany = company?.trim() || null;
    let authorAvatar = null;
    let userId = null;

    if (userSession) {
      authorName = userSession.name;
      authorRole = userSession.role === "RECRUITER" ? "Tech Recruiter" : "AI Peer";
      authorCompany = userSession.company || authorCompany;
      authorAvatar = userSession.avatar || userSession.name.slice(0, 2).toUpperCase();
      userId = userSession.userId;
    } else {
      if (!authorName || authorName.length < 2) {
        return NextResponse.json(
          { error: "Please provide your name or sign in" },
          { status: 400 }
        );
      }
      authorAvatar = authorName.slice(0, 2).toUpperCase();
    }

    const newEntry = await prisma.guestbookEntry.create({
      data: {
        name: authorName,
        role: authorRole,
        company: authorCompany,
        content: content.trim(),
        avatar: authorAvatar,
        isApproved: true,
        userId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your endorsement has been published.",
        entry: newEntry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to post guestbook entry:", error);
    return NextResponse.json(
      { error: "Failed to publish recommendation" },
      { status: 500 }
    );
  }
}
