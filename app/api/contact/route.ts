import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { z } from "zod";
import { checkRateLimit } from "@/lib/ratelimit";
import NotificationEmail from "@/emails/NotificationEmail";
import ConfirmationEmail from "@/emails/ConfirmationEmail";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(2000),
  // Honeypot — must be empty; bots fill it in
  website: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "127.0.0.1";

  const { success } = await checkRateLimit(ip);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, message, website } = parsed.data;

  // Silently succeed for bots that filled the honeypot
  if (website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const [notificationHtml, confirmationHtml] = await Promise.all([
    render(NotificationEmail({ name, email, message })),
    render(ConfirmationEmail({ name })),
  ]);

  const [notification] = await Promise.all([
    // To me — new message notification
    resend.emails.send({
      from: "Anzil Portfolio <contact@mohammedanzil.in>",
      to: "anziln422@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: notificationHtml,
    }),
    // To sender — confirmation email
    resend.emails.send({
      from: "Anzil <contact@mohammedanzil.in>",
      to: email,
      subject: "Got your message.",
      text: `Hi ${name},\n\nThanks for reaching out — I've received your message and will get back to you soon.\n\n— Anzil\nmohammedanzil.in`,
      html: confirmationHtml,
    }),
  ]);

  if (notification.error) {
    console.error("Resend error:", notification.error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
