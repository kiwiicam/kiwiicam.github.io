import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/ProjectPage.css'

function ProjectPage({ title, text, image }) {
    return (
        <div className='project-page-center'>
            <div className='projectpage-main'>
                <h2>{title}</h2>
                <h3>{text}</h3>

                {image && image.map((cardProps, index) => (
                    <ProjectCard
                        key={index}
                        imageURL={cardProps.imageURL}
                        text={cardProps.text}
                        left={cardProps.left}
                    />
                ))}
            </div>
        </div>

    )
}

export default ProjectPage
