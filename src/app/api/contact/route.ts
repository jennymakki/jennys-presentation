import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Jennys portfolio <onboarding@resend.dev>",
      to: "jjennyeklundd@hotmail.com",
      subject: `Nytt meddelande från ${name}`,
      replyTo: email,
      text: `
Namn: ${name}
Email: ${email}

Meddelande:
${message}
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, error },
      { status: 500 }
    );
  }
}