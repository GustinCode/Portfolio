import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            {/* separando o texto da imagem */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* separando 7/12 da tela para guardar o texto com as informações em dispositivos grandes */}
                {/* footnote: if the comp text is larger than 2 paraghraphs use text-left insted of text-center */}
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Gustavo Henrique<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l  from-cyan-400 from-30% to-blue-700 ">Desenvolvedor front-end{""}</span>
                        {/* test */}
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus ante</p>
                    <div>
                        {/* possible change? bg-gradient-to-r from-cyan-500 to-purple-700 */}
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent transition hover:bg-gradient-to-bl from-cyan-400 from-30% to-blue-700 hover:text-white hover:border-2  text-white border border-white mt'>Contacts</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mt-2 bg-transparent transition hover:bg-gradient-to-bl from-cyan-400 from-30% to-blue-700  hover:text-black'>Download CV</button>
                    </div>
                </div>
                {/* separando 5/12 da tela para guardar a imagem */}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] relative">
                    <Image src="/images\reversed-logo.svg"
                        alt='logo image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={275}
                        height={275}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection