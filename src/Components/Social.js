import React from 'react'

export default function Social(props) {
    const {link, image, name} = props

    //logos and links to social media and contact
    return (
        <div>
            <a href = {link} target="_blank"><img src={image} className='social-link' alt={name}/></a>
            <h6 className="social-subtitle">{name}</h6>
        </div>
    )
}
