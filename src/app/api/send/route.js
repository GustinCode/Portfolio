import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    if (!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        return NextResponse.error()
    }

    try {
        const data = await resend.emails.send(
            {
                from: "Gustavo Henrique <Contact@gustincode.tech>",
                to: email,
                bcc: fromEmail,
                subject: "Thank you for contacting",
                react: (
                    <>
                        <h1>Thank you for contacting!</h1>
                        <p>Your message has been received:</p>
                        <br />
                        <h2>{subject}</h2>
                        <p>{message}</p>
                        <br />
                        <br />
                        <p>I appreciate your inquiry and will respond promptly.<br />Please expect to hear from me shortly.</p>
                    </>
                ),
            }

        );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
