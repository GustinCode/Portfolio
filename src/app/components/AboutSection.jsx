import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
                <Image src="/images\reversed-logo.svg" alt='template image for now' width={500} height={500} />
            </div>
        </section >
    )
};
export default AboutSection