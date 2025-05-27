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
                        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#333" }}>
                            <p>Olá,</p>
                            <p>Obrigado por entrar em contato!<br />Recebemos sua mensagem com o seguinte assunto:</p>
                            <h2 style={{ color: "#007bff" }}>{subject}</h2>
                            <p>{message}</p>
                            <p>
                                Agradeço pelo seu contato. Estou revisando suas perguntas e retornarei com as informações em breve.
                            </p>
                            <p>Se houver algo mais que deseje adicionar ou esclarecer, sinta-se à vontade para responder este e-mail.</p>
                            <br />
                            <p>
                                Atenciosamente,<br />
                                <strong>Gustavo Henrique</strong><br />
                                Desenvolvedor Front-end<br />
                                <a href="mailto:contato@gustincode.tech">contato@gustincode.tech</a><br />
                                <a href="https://gustincode.tech">gustincode.tech</a>
                            </p>
                            <hr style={{ margin: "24px 0", borderColor: "#eee" }} />
                            <p style={{ fontSize: "12px", color: "#888" }}>
                                Você está recebendo este e-mail porque entrou em contato através do site <a href="mailto:contato@gustincode.tech">contato@gustincode.tech</a><br />.
                            </p>
                        </div>
                    </>

                ),
            }

        );
        return NextResponse.json(data);
    } catch (error) {
        rconsole.error("Erro ao enviar e-mail:", error);
        return NextResponse.json(
            { error: "Erro interno ao tentar enviar o e-mail." },
            { status: 500 }
        );
    }
}
