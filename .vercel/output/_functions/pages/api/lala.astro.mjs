import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resendClient = new Resend("re_aViQw1Wk_JLBr8UF1w1iBRfke4DpHQdgM");
const POST = async ({ request }) => {
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
      from: `Resend <onboarding@resend.dev>`,
      to: ["priscilaroza.psi@gmail.com"],
      subject: `Contato do site de ${name}`,
      html: `<p>Mensagem: ${message}</p><p>Enviado por: ${name} (${email})</p>`
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar email via Resend:", err);
    return new Response(JSON.stringify({ error: "Falha ao enviar email" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
