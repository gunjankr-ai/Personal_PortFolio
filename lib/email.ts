import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMAIL_FROM || "Gunjan Kumar Sah <onboarding@resend.dev>";
const emailTo = process.env.EMAIL_TO || "gunjansah63@gmail.com";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

/**
 * Sends an email notification to Gunjan and an auto-reply confirmation to the visitor.
 */
export async function sendContactEmails(payload: ContactEmailPayload) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(payload.createdAt);

  const phoneDisplay = payload.phone?.trim() ? payload.phone : "Not provided";

  // 1. Notification Email to Gunjan
  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #0284c7, #06b6d4); padding: 24px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.025em; }
          .body { padding: 28px; }
          .field-group { margin-bottom: 16px; border-bottom: 1px solid #1f2937; padding-bottom: 12px; }
          .label { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 15px; color: #f8fafc; word-break: break-word; }
          .message-box { background: #1e293b; padding: 18px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-top: 8px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
          .footer { background: #030712; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
          .reply-btn { display: inline-block; background: #0284c7; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 New Portfolio Inquiry Received</h1>
          </div>
          <div class="body">
            <div class="field-group">
              <div class="label">From</div>
              <div class="value"><strong>${payload.name}</strong> (&lt;${payload.email}&gt;)</div>
            </div>
            <div class="field-group">
              <div class="label">Phone</div>
              <div class="value">${phoneDisplay}</div>
            </div>
            <div class="field-group">
              <div class="label">Subject</div>
              <div class="value">${payload.subject}</div>
            </div>
            <div class="field-group">
              <div class="label">Date & Time</div>
              <div class="value">${formattedDate} (IST)</div>
            </div>
            <div class="field-group" style="border-bottom: none;">
              <div class="label">Message Content</div>
              <div class="message-box">${payload.message}</div>
            </div>
            <div style="text-align: center;">
              <a href="mailto:${payload.email}?subject=Re: ${encodeURIComponent(payload.subject)}" class="reply-btn">
                Reply Directly to ${payload.name}
              </a>
            </div>
          </div>
          <div class="footer">
            Gunjan Kumar Sah &bull; Data Science & AI Engineer &bull; Portfolio Contact System
          </div>
        </div>
      </body>
    </html>
  `;

  // 2. Auto-reply Confirmation Email to the Visitor
  const visitorHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #0f766e, #06b6d4); padding: 24px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
          .body { padding: 28px; line-height: 1.6; color: #cbd5e1; }
          .body p { margin-top: 0; margin-bottom: 16px; }
          .summary-box { background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0; }
          .summary-item { font-size: 13px; margin-bottom: 6px; }
          .summary-label { color: #94a3b8; font-weight: 600; }
          .signature { border-top: 1px solid #1f2937; padding-top: 18px; margin-top: 24px; }
          .name { color: #f8fafc; font-weight: 700; font-size: 16px; }
          .title { color: #38bdf8; font-size: 13px; }
          .footer { background: #030712; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="body">
            <p>Hi <strong>${payload.name}</strong>,</p>
            <p>Thank you for getting in touch through my portfolio. I have received your message regarding <strong>"${payload.subject}"</strong> and will review the details promptly.</p>
            <p>I typically respond within 24 to 48 hours for project inquiries, research collaborations, and career opportunities.</p>
            
            <div class="summary-box">
              <div class="summary-item"><span class="summary-label">Subject:</span> ${payload.subject}</div>
              <div class="summary-item"><span class="summary-label">Submitted On:</span> ${formattedDate}</div>
              <div class="summary-item"><span class="summary-label">Status:</span> Delivered to Inbox</div>
            </div>

            <div class="signature">
              <div class="name">Gunjan Kumar Sah</div>
              <div class="title">Data Science &amp; AI Engineer | Full-Stack Developer</div>
              <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                Email: gunjansah63@gmail.com &bull; GitHub: https://github.com/gunjankr-ai &bull; LinkedIn: linkedin.com/in/gunjan-kumar-sah-3b0b28435
              </div>
            </div>
          </div>
          <div class="footer">
            &copy; 2026 Gunjan Kumar Sah. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  if (!resend) {
    console.log("=================================================");
    console.log("📧 [RESEND DEV MODE - NO API KEY DETECTED]");
    console.log(`To: ${emailTo} (Admin Alert)`);
    console.log(`From: ${payload.name} <${payload.email}>`);
    console.log(`Subject: [Portfolio Contact] ${payload.subject}`);
    console.log(`Phone: ${phoneDisplay}`);
    console.log(`Message:\n${payload.message}`);
    console.log("-------------------------------------------------");
    console.log(`Auto-reply would be sent to: ${payload.email}`);
    console.log("=================================================");
    return { success: true, mode: "development_logger" };
  }

  try {
    // Dispatch alert to Gunjan
    const adminEmailResult = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: payload.email,
      subject: `[Portfolio Inquiry] ${payload.subject} - from ${payload.name}`,
      html: adminHtml,
    });

    // Dispatch confirmation to Visitor
    const visitorEmailResult = await resend.emails.send({
      from: emailFrom,
      to: payload.email,
      subject: `Thank you for contacting Gunjan Kumar Sah: "${payload.subject}"`,
      html: visitorHtml,
    });

    return {
      success: true,
      adminEmailId: adminEmailResult.data?.id,
      visitorEmailId: visitorEmailResult.data?.id,
    };
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    // Don't throw fatal error if email delivery fails; the database submission is already recorded
    return { success: false, error };
  }
}
