import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status")?.toUpperCase() || "ALL";

    // Build filter conditions
    const whereCondition: Record<string, unknown> = {};

    if (status !== "ALL") {
      whereCondition.status = status;
    }

    if (search) {
      whereCondition.OR = [
        { name: { contains: search } },
        { email: { contains: search } },
        { subject: { contains: search } },
        { message: { contains: search } },
      ];
    }

    // Fetch messages
    const messages = await db.contactMessage.findMany({
      where: whereCondition,
      orderBy: { createdAt: "desc" },
    });

    // Compute stats
    const totalCount = await db.contactMessage.count();
    const unreadCount = await db.contactMessage.count({ where: { status: "UNREAD" } });
    const readCount = await db.contactMessage.count({ where: { status: "READ" } });
    const archivedCount = await db.contactMessage.count({ where: { status: "ARCHIVED" } });

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const todayCount = await db.contactMessage.count({
      where: {
        createdAt: {
          gte: startOfToday,
        },
      },
    });

    return NextResponse.json({
      messages,
      stats: {
        total: totalCount,
        unread: unreadCount,
        read: readCount,
        archived: archivedCount,
        today: todayCount,
      },
    });
  } catch (error) {
    console.error("Error fetching admin messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
