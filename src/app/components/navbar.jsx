import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar1 = () => {
    return (
        // code for a fixed navbar: fixed top-0 z-50 w-full
        <nav className='flex flex-wrap justify-between mx-auto p-8'>
            {/* <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 border-b-2 border-white p-8 py-7"> */}
            <Link href="/">
                <Image src="/images\reversed-logo.svg" alt="home logo" width={35} height={35} />
            </Link>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul>
                    <li>
                        <Link href={"#about"} className='block py-2 pl-3 text-white sm:text-xl rounded md:p-0 hover:text-gray-600'>About</Link>
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default navbar1