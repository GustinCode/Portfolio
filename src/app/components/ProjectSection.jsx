"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projectData from "../data/projectData"
import ProjectTag from './ProjectTag'

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag));
    return (
        <>
            <h2 className='text-4xl font-bold text-center text-white mb-4'>
                My projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="HTML" isSelected={tag === "HTML"} />
            </div>
            <div>{filteredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project.tags}
                    gitUrl={project.github}
                    previewUrl={project.preview}
                />))}
            </div>
        </>
    )
}

export default ProjectSection