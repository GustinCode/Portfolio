"use client"
import React from 'react'
import achievementList from "../data/achievementList";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers") }, { ssr: false })

const AchievementSection = () => {
    return (
        <div className='py-8 px-8 xl:gap-16 sm:py-16 xl:px-16'>
            <div className="border-[#33353f] container border rounded-md py-8 px-16 flex flex-row items-center justify-between ">

                {
                    achievementList.map((achievement, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center mx-3'>
                                <h2 className='text-white text-4xl font-bold flex flex-row'>
                                    {achievement.prefix}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale="en-US"
                                        className="text-white text-4xl font-bold"
                                        config={(_, index) => {
                                            return {
                                                mass: 1,
                                                friction: 100,
                                                tension: 140 * (index + 1)
                                            }
                                        }}
                                    />
                                    {achievement.postfix}
                                </h2>
                                <p className='text-gray-400 text-base'>{achievement.metric}  </p>
                            </div>
                        );

                    }
                    )
                }
            </div>
        </div>
    )
}

export default AchievementSection