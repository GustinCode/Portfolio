"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import projectData from "../data/projectData"
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

    const returnVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        duration: { duration: 3 }
    }

    return (
        <section id='projects' >
            <h2 className='text-center text-4xl font-bold  text-white mt-4 mb-8 md:mb-12'>
                My projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="HTML" isSelected={tag === "HTML"} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12'>{filteredProjects.map((project, index) => (
                <motion.li key={index} variants={returnVariants} initial="initial" animate={isInView ? "animate" : "initial"} transtition={{ duration: 0.4, delay: index * 0.2 }}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project.tags}
                        gitUrl={project.github}
                        previewUrl={project.preview}
                    />
                </motion.li>
            ))}
            </ul>
        </section >
    )
}

export default ProjectSection