"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import TabData from "../data/TabData"



const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    }
    // Find the item with the matching ID and the selected tab
    const tabItem = TabData.find(item => item.id === tab);

    return (
        <section id='about' className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16">
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Hi, I am a Junior web developer studing to be a
                        full-stack, love developing applications and a bit of
                        back-end processes!
                        I have experience with HTML, CSS, JS, next framework, Python,
                        Git, SQl, java. A quick learner in programming languages and
                        adapt well to the enviroment and with my team.
                    </p>
                    <p>This is a little about me but fill free to contact me for more!</p>
                    <div className="flex flex-rol mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}Skills {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "} Education {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "} Certifications {" "}
                        </TabButton>

                    </div>
                    <div className='mt-8 mb-2 md:mb-4'>
                        <ul className='list-disc pl-2'>
                            {
                                tabItem.content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="mb-4">
                    <Image className='rounded-3xl mb:rounded-xl' src="/images\gustphoto.jpg" alt='template image for now' width={500} height={500} />
                </div>

            </div>
        </section >
    )
};
export default AboutSection