import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    if (!email || !subject || !message) {
        return res.status(400).json({ error: "Incomplete data provided" });
    }

    try {


        const data = await resend.emails.send({
            from: fromEmail,
            to: ['gustavogoncalves3ch@gmail.com', email], // You can add multiple recipients separated
            subject: subject,
            react: (<>
                <h1>{subject}</h1>
                <p>Thank you for contacting Us!</p><br />
                <p>New mensage submitted:</p>
                <p>{message}</p></>),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}