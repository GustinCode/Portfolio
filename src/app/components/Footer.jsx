import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353f] border-l-transparent border-r-transparent'>
            <div className="container p-12 flex justify-between">
                <div className='rounded-full bg-white'>
                    <Image
                        src="..\images\logo.svg"
                        alt="logo.svg"
                        className='flex justify-center'
                        height={60}
                        width={60}
                    />
                    {/* <span className='text-white text-xl flex justify-center mt-4 font-bold'>GH</span> */}
                </div>
                <p className='text-slate-400'>All right reserded</p>
            </div>
        </footer>
    )
}

export default Footer