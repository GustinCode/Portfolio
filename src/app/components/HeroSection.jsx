"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import ImageCard from "./ImageCard"
//studing for import a imageCard which moves in the direction of mouse position, but not working yet.
const HeroSection = () => {
    return (
        <section>
            {/* separando o texto da imagem */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* separando 7/12 da tela para guardar o texto com as informações em dispositivos grandes */}
                {/* footnote: if the comp text is larger than 2 paraghraphs use text-left insted of text-center */}
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-l  from-primary from-30% to-secondary-700 '>
                            Gustavo Henrique
                        </span>
                        <br />
                        {"A "}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Front-end Developer',
                                3000, // wait 1s before replacing "Mice" with "Hamsters"
                                // Not yet to be review, just an sneak pick
                                // 'Back-end Developer',
                                // 1500,
                                // 'Student of AI',
                                // 3000,
                                'University Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                        {/* test */}
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6">
                        Cristian, Front-end Developer and as aspirant a Full-stack Dev
                    </p>
                    <div>
                        {/* possible change? bg-gradient-to-r from-cyan-500 to-purple-700 */}
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent transition hover:bg-gradient-to-bl from-primary from-30% to-secondary-700 hover:text-white  text-white border border-white mt'>Contacts</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mt-2 bg-transparent hover:border-0  hover:bg-gradient-to-bl from-primary from-30% to-secondary-700  '>
                            <span className='block bg-black hover:bg-zinc-950 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                {/* separando 5/12 da tela para guardar a imagem */}
                <div className="col-span-5 place-self-center mt-4 md:mt-16 lg:mt-0 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] relative">
                    <Image src="/images\reversed-logo.svg"
                        alt='logo image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={275}
                        height={275}
                    />
                    {/* <ImageCard src="/images\Gustphoto.jpg" alt="logo Image test" width={700} height={700} /> */}

                </div>
            </div>
        </section>
    )
}

export default HeroSection