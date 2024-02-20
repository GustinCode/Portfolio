import React from 'react'
import githubicon from "../../../public/images/github-icon.svg"
import linkedinicon from "../../../public/images/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4'>
      <div><h5 className='text-xl font-bold text-white my-2'> {"Let's Connect!"} </h5>
        <p className='text-[#adb7be] mb-4 max-w-md'>
          {" "}
          orem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed vitae tempor purus, id lacinia ipsum. Ut in iaculis odio.
          Fusce justo mi, pharetra et ante sed, placerat vulputate mauris.
          Suspendisse justo magna, ultrices ac augue eget, tristique
          imperdiet odio. Proin luctus tortor dolor, nec vestibulum
          convallis vel. Nulla erat ex, viverra id dolor nec,
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://www.github.com/Gustingame" target='_blank'>
            <Image src={githubicon} alt='Github Icon' height={30} width={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/gustavo-henrique-gon%C3%A7alves-ribeiro-a45090226/" target='_blank'>
            <Image src={linkedinicon} alt='Linkedin Icon' height={30} width={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
            <input type='email' id='email' required
              className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2'
              placeholder='your-email@example.com' />
            <label htmlFor="subject" className='text-white block m-2 text-sm font-medium'>Subject</label>
            <input type='text' id='subject' required
              className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2'
              placeholder='Say something nice to me!' />
            <label htmlFor="message" className='text-white block m-2 text-sm font-medium'>Message Me</label>
            <textarea name='message' id='message' className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2' placeholder="Hi, Gustavo. I'd like to talk about..." />
          </div>
        </form>
      </div>

    </section>
  )
}

export default EmailSection