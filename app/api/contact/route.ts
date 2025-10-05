import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());

  const name = String(payload.name || "");
  const email = String(payload.email || "");
  const org = String(payload.org || "");
  const interest = String(payload.interest || "general");
  const message = String(payload.message || "");

  // If SMTP env vars are missing, log and return ok (non-blocking during dev)
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL } = process.env as Record<string,string|undefined>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.warn("Contact form: SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL.");
    console.log("Submission:", { name, email, org, interest, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for others
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const mailFrom = FROM_EMAIL || SMTP_USER;

  const text = [
    `New website contact submission:`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${org}`,
    `Interest: ${interest}`,
    `Message:
${message}`
  ].join("\n");

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: TO_EMAIL,
      replyTo: email || mailFrom,
      subject: `[Dropzone Robotics] ${interest} – ${name}`,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
