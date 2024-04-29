"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const endpoint = "/api/send"

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
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }

  }
  return (
    <section className='grid md:grid-cols-2 md:my-12 my-12 py-24 gap-4'>
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
          <Link href="https://www.github.com/Gustingame" target='_blank'>
            <Image src="/images\github-reversed.png" alt='Github Icon' height={30} width={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/gustavo-henrique-gon%C3%A7alves-ribeiro-a45090226/" target='_blank'>
            <Image src="/images\linkedin-reversed.png" alt='Linkedin Icon' height={30} width={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6 z-10'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
            <input name='email' type='email' id='email' required
              className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='your-email@example.com' />
            <label htmlFor="subject" className='text-white block m-2 text-sm font-medium'>Subject</label>
            <input name='subject' type='text' id='subject' required
              className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Say something nice to me!' />
            <label htmlFor="message" className='text-white block m-2 text-sm font-medium'>Message Me</label>
            <textarea name='message' id='message' className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Hi, Gustavo. I'd like to talk about..." />
            <button
              type='submit'
              className='bg-primary hover:bg-secondary-500 text-white font-medium p-2.5 px-5 rounded-lg w-full mt-3'>Send Mensage</button>
          </div>
          {
            emailSubmitted && (
              <p className='text-secondary-800 text-sm mt-2'>
                Email send successfully!
              </p>
            )
          }
        </form>
      </div>

    </section>
  )
}

export default EmailSection