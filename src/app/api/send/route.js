import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: "thank you for contacting",
            react: (
                <>
                    <h1>Thank you for contacting us!</h1>
                    <p>Your message has been received:</p>
                    <h3>{subject}</h3>
                    <p>{message}</p>

                    <p>We appreciate your inquiry and will respond promptly.<br />Please expect to hear from us shortly.</p>
                </>
            ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}