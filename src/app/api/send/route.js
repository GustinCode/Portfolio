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
                        <p>Olá,</p>
                        <p>Obrigado por entrar em contato!</p>
                        <p>
                            Recebemos sua mensagem com o seguinte assunto:
                        </p>
                        <h2>{subject}</h2>
                        <p>{message}</p>
                        <p>
                            Agradecemos pelo seu contato. Estou revisando suas perguntas e retornarei com as informações o mais breve possível.
                        </p>
                        <p>
                            Se houver algo mais que queira adicionar ou esclarecer, por favor, fique à vontade para responder a este e-mail.
                        </p>
                        <br />
                        <p>
                            Atenciosamente,<br />
                            Gustavo Henrique<br />
                            Desenvolvedor Front-end<br />
                            contato@gustincode.tech
                        </p>
                    </>

                ),
            }

        );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
