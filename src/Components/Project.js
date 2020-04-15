import React from 'react'

export default function Project(props) {
    const { name, image, desc, gitFront, gitBack, demo, liveUrl } = props
    //image, description, and links to each project
    return (
        <div className='project-container'>
            <h2>{name}</h2><br/>
            <img src={image} className = 'project-logo' alt={name}/><br/>
            <ul className='project-links-list'>
                <li><p className="project-description">{desc}</p></li>
                <li><a href={liveUrl} target="_blank" className='project-link'>Live Page</a></li>
                <li><a href={gitFront} target="_blank" className='project-link'>GitHub Frontend</a></li>
                <li><a href={gitBack} target="_blank" className='project-link'>GitHub Backend</a></li>
                <li><a href={demo} target="_blank" className='project-link'>Video Demo</a></li>
            </ul>
        </div>
    )
}
