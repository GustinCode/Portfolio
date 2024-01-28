import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar1 = () => {
    return (
        <section>
            <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
                <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
                    <Link href="/">
                        <Image src="/images\reversed-logo.svg" alt="home logo" width={35} height={35} />
                    </Link>
                </div>
            </nav>
        </section>
    )
}

export default navbar1