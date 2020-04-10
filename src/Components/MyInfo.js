import React from 'react'
import ProfilePic from '../Pictures/mewithcoffee.jpg'

export default function MyInfo() {
    //name and prof pic
    return (
        <div>
            <h1 id='myName'>Thomas Donovan</h1>
            <img src={ProfilePic} alt='Thomas Donovan' id='profPic'></img>
        </div>
    )
}
