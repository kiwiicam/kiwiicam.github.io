import React from 'react'
import '../css/ProjectCard.css'
function ProjectCard({ imageURL, text, left }) {
    return (
        <div className='main'>
            <div className='left'>
                <img src={imageURL} />
            </div>
            <div className='right'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ProjectCard