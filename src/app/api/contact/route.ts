import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Body inválido." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return Response.json({ error: "Falta el nombre." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ error: "El email no es válido." }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return Response.json({ error: "Falta el mensaje." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Faltan variables de entorno de Resend (RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL). Ver .env.local.example.",
    );
    return Response.json(
      { error: "El formulario todavía no está configurado. Escribime directo por email." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} — portfolio`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
