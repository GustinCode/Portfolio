"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// need to fix the code don't forget
const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        // code for a fixed navbar: fixed top-0 z-50 w-full
        <nav className='fixed top-0 right-0 left-0 z-10 bg-gray-950 bg-opacity-90'>
            <div className="flex flex-wrap items-center justify-between px-3">
                {/* <div className="flex-between w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 border-b-2 border-white p-8 py-7"> */}
                <Link href="/">
                    <Image src="/images\reversed-logo.svg" alt="home logo" width={70} height={70} />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {navbarOpen ? <button><Bars3Icon className='h-5 w-5' /></button> : <button></button>}
                </div>
                <div className='menu hidden mb:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default navbar