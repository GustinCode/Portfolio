import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover"
                }}>
                <div className='overlay flex items-center justify-center absolute top-0 left-0 right-0 w-full h-full bg-[#181818] bg-opacity-80 invisible group-hover:visible  transition-all duration-350'>
                    <Link href={gitUrl} target="_blank"
                        className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white'
                    >
                        <CodeBracketIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white' />
                    </Link>
                    <Link href={previewUrl} target="_blank"
                        className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white'
                    >
                        <EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white' />
                    </Link>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h2 className='font-xl font-semibold mb-1'>{title}</h2>
                <p className='text-grey-500'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard