import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Preencha todos os campos." },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "Um dos campos excede o tamanho permitido." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada.");
    return NextResponse.json(
      { error: "Serviço de e-mail indisponível no momento." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || "comunicamarymachado@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  try {
    const { error } = await resend.emails.send({
      from: `Site Maryanne Machado <${from}>`,
      to,
      replyTo: email,
      subject: `Novo contato pelo site — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar sua mensagem. Tente novamente." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failure:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente." },
      { status: 502 },
    );
  }
}
