import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/ratelimit";
import { sendContactEmails } from "@/lib/email";

// Zod schema for Contact Form validation
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(150, "Email is too long"),
  phone: z.string().trim().max(30, "Phone number is too long").optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
  website_bot_check: z.string().optional(), // Honeypot trap field
});

export async function POST(request: NextRequest) {
  try {
    // 1. IP-based rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(ip, 5, 15 * 60 * 1000); // 5 messages per 15 minutes
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: `Too many submissions. Please try again in ${rateLimit.reset} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate request body
    const body = await request.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid input data";
      return NextResponse.json({ error: firstError, errors: parseResult.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, phone, subject, message, website_bot_check } = parseResult.data;

    // 3. Honeypot check: if bot filled this hidden field, silently reject
    if (website_bot_check && website_bot_check.length > 0) {
      return NextResponse.json({ success: true, message: "Thank you for reaching out!" });
    }

    // 4. Save contact message securely in the database
    const savedMessage = await db.contactMessage.create({
      data: {
        name,
        email: email.toLowerCase(),
        phone: phone || null,
        subject,
        message,
        status: "UNREAD",
      },
    });

    // 5. Send notification email and confirmation email
    await sendContactEmails({
      name: savedMessage.name,
      email: savedMessage.email,
      phone: savedMessage.phone || undefined,
      subject: savedMessage.subject,
      message: savedMessage.message,
      createdAt: savedMessage.createdAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been sent successfully. A confirmation email is on its way.",
        id: savedMessage.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred while sending your message. Please try again or email directly at gunjansah63@gmail.com.",
      },
      { status: 500 }
    );
  }
}
