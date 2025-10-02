// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resendClient = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name")?.toString();
  const email = form.get("email")?.toString();
  const message = form.get("message")?.toString();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Todos os campos são obrigatórios" }),
      { status: 400 }
    );
  }

  try {
    await resendClient.emails.send({
      from: `Seu Nome <no-reply@sua-domain.com>`,
      to: [ "seuemail@exemplo.com" ],
      subject: `Contato do site de ${name}`,
      html: `<p>Mensagem: ${message}</p><p>Enviado por: ${name} (${email})</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar email via Resend:", err);
    return new Response(JSON.stringify({ error: "Falha ao enviar email" }), { status: 500 });
  }
};
