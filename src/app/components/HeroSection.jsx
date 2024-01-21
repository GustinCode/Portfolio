import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Gustavo Henrique</h1>
                    <p className="text-gray-200 text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus ante</p>
                </div>
                <div className="col-span-5">
                    <Image src="\public\images\logo.svg" alt='logo image' width={300} height={300} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection