"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const endpoint = "/api/send"

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(endpoint, options);
      // see the information of the content of the object
      // const resData = await response.json();
      // console.log(resData);

      if (response.status === 200) {
        console.log("Email sent successfully.");
        setEmailSubmitted(true);
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }

  }
  return (
    <section id='contact' className='grid md:grid-cols-2 md:my-12 my-12 py-24 gap-4'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary opacity-60 to-transparent rounded-full h-80 w-80 z-0  blur-lg absolute botton-0 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'><h5 className='text-xl font-bold text-white my-2'> {"Let's Connect!"} </h5>
        <p className='text-[#adb7be] mb-4 max-w-md'>
          {" "}
          Thank you for considering reaching out to me.
          Whether you want an contract me, a job opportunities, or simply want to connect.
          <br />
          Fell free to send an message in this forms or my social networks.
          <br />
          I will contact you as soon as possible!.
          <br />
          You can also find me on social networks bellow.
        </p>
        <div className='socials flex flex-row gap-2 '>
          <Link href="https://www.github.com/Gustincode" target='_blank'>
            <Image src="/images\github-reversed.png" alt='Github Icon' height={30} width={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/gustavohenrique-dev/" target='_blank'>
            <Image src="/images\linkedin-reversed.png" alt='Linkedin Icon' height={30} width={30} />
          </Link>
        </div>
      </div>
      {/* working in progress  */}
      <div>
        {/* remove this ⬇️ */}
        <p className='text-white font-sans text-6xl flex justify-center'>Work in progress</p>
        <div className='block relative z-10 ' >
          {/* remove this ⬆️ and remove this ⬇️"block blur-lg pointer-events-none user-select-none" and remove onCopy={(e) => e.preventDefault()} when done */}
          <form className=' flex-col block blur-lg pointer-events-none user-select-none' onSubmit={handleSubmit} onCopy={(e) => e.preventDefault()}>
            <div className='mb-6 '> {/*add later z-10 */}
              <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
              <input name='email' type='email' id='email' required
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Your-email@example.com' />
              <label htmlFor="subject" className='text-white block m-2 text-sm font-medium'>Subject</label>
              <input name='subject'
                type='text'
                id='subject'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Topic of Interest' />
              <label htmlFor="message" className='text-white block m-2 text-sm font-medium'>Message Me</label>
              <textarea name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Hi, Gustavo. I'd like to talk about..." />
              <button
                type='submit'
                className='bg-primary hover:bg-secondary-500 text-white font-medium p-2.5 px-5 rounded-lg w-full mt-3'>Send Mensage</button>
            </div>
            {
              emailSubmitted && (
                <span className='text-base lg:text-lg'>
                  <TypeAnimation
                    cursor={false}
                    sequence={[
                      'Email sucessifully send!',
                      7000,
                      "Email sucessifully send! Check your inbox!",
                    ]}
                    wrapper="span"
                    style={{ fontSize: "0.75 rem", color: "#1e40af" }}
                    speed={3}
                    repeat={0}
                  />
                </span>
              )
            }
          </form>
        </div>
      </div>

    </section>
  )
}

export default EmailSection