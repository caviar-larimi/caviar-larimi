import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      product = "",
      quantity = "",
      address = "",
      city = "",
      deliveryDate = "",
      notes = "",
      locale = "de",
    } = body || {};

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    const CONTACT_TO = process.env.CONTACT_TO || "info@caviar-larimi.ch";
    const CONTACT_FROM = process.env.CONTACT_FROM || "info@caviar-larimi.ch";

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      // Website darf trotzdem deployen – nur Mailversand ist noch nicht aktiv
      return NextResponse.json(
        { ok: true, warning: "SMTP not configured yet." },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject =
      locale === "de"
        ? "Neue Offerte / Bestellung – Caviar Larimi"
        : "New quote / order – Caviar Larimi";

    const text = [
      `Name: ${name}`,
      `Firma: ${company}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Produkt: ${product}`,
      `Menge: ${quantity}`,
      `Adresse: ${address}`,
      `Ort: ${city}`,
      `Wunschdatum: ${deliveryDate}`,
      `Notizen: ${notes}`,
    ].join("\n");

    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
