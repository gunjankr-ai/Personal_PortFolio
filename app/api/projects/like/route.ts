import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const userSession = await getUserSession();
    const forwarded = req.headers.get("x-forwarded-for");
    const ipAddress = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    // 1. Group counts by projectId
    const likes = await prisma.projectLike.groupBy({
      by: ["projectId"],
      _count: {
        id: true,
      },
    });

    const counts: Record<string, number> = {};
    for (const item of likes) {
      counts[item.projectId] = item._count.id;
    }

    // 2. Determine which projects the current client has liked
    let userLikes: string[] = [];
    if (userSession?.userId) {
      const records = await prisma.projectLike.findMany({
        where: { userId: userSession.userId },
        select: { projectId: true },
      });
      userLikes = records.map((r) => r.projectId);
    } else {
      const records = await prisma.projectLike.findMany({
        where: { ipAddress },
        select: { projectId: true },
      });
      userLikes = records.map((r) => r.projectId);
    }

    return NextResponse.json({
      counts,
      userLikes,
    });
  } catch (error) {
    console.error("Failed to fetch project likes:", error);
    return NextResponse.json({ counts: {}, userLikes: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { projectId } = body;

    if (!projectId || typeof projectId !== "string") {
      return NextResponse.json({ error: "projectId is required" }, { status: 400 });
    }

    const userSession = await getUserSession();
    const forwarded = req.headers.get("x-forwarded-for");
    const ipAddress = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const userId = userSession?.userId || null;

    // Check if like exists
    let existing;
    if (userId) {
      existing = await prisma.projectLike.findFirst({
        where: { projectId, userId },
      });
    } else {
      existing = await prisma.projectLike.findFirst({
        where: { projectId, ipAddress },
      });
    }

    let liked = false;

    if (existing) {
      // Toggle off (unlike)
      await prisma.projectLike.delete({
        where: { id: existing.id },
      });
      liked = false;
    } else {
      // Toggle on (like)
      await prisma.projectLike.create({
        data: {
          projectId,
          userId,
          ipAddress,
        },
      });
      liked = true;
    }

    // Return new count
    const count = await prisma.projectLike.count({
      where: { projectId },
    });

    return NextResponse.json({
      success: true,
      projectId,
      liked,
      count,
    });
  } catch (error) {
    console.error("Failed to toggle project like:", error);
    return NextResponse.json(
      { error: "Failed to update project like" },
      { status: 500 }
    );
  }
}
