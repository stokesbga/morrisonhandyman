import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  town?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions without doing anything
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 200);
  const town = clean(body.town, 120);
  const service = clean(body.service, 120);
  const message = clean(body.message, 4000);

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, phone number, and a short description of the job." },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  let stored = false;
  let emailed = false;

  // 1) Store in Supabase (if configured)
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      phone,
      email: email || null,
      town: town || null,
      service: service || null,
      message,
    });
    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
    } else {
      stored = true;
    }
  }

  // 2) Forward via email (if SMTP configured)
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const CONTACT_EMAIL =
    process.env.CONTACT_EMAIL ?? "drewmorrisonhandyman@gmail.com";
  if (SMTP_HOST && SMTP_USER && SMTP_PASS && CONTACT_EMAIL) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 587),
        secure: Number(SMTP_PORT ?? 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transporter.sendMail({
        from: `"Morrison Handyman Website" <${SMTP_USER}>`,
        to: CONTACT_EMAIL,
        replyTo: email || undefined,
        subject: `New estimate request from ${name}${service ? ` — ${service}` : ""}`,
        text: [
          `New request from the website contact form:`,
          ``,
          `Name:    ${name}`,
          `Phone:   ${phone}`,
          `Email:   ${email || "—"}`,
          `Town:    ${town || "—"}`,
          `Service: ${service || "—"}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
      });
      emailed = true;
    } catch (err) {
      console.error(
        "[contact] Email send failed:",
        err instanceof Error ? err.message : err
      );
    }
  }

  if (!stored && !emailed) {
    // Neither backend is configured/working — tell the visitor to call instead.
    return NextResponse.json(
      {
        error:
          "We couldn't send your request right now. Please call (603) 514-1814 instead.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
