import React from 'react'
import Project from './Project.js'
import Pokeball from '../Pictures/pokeball.png'
import Scooter from '../Pictures/scooter.png'
import Basket from '../Pictures/basket.png'


export default function ProjectLinks() {
    //links to projects
    return (
        
        <div id='all-projects'>
            <Project
                name='Basket'
                image={Basket}
                desc='Basket is a POS system that processes transactions online. The front end is built using React and Redux. The backend is built through Ruby on Rails. StripeAPI is utilized to process and refund payments. It allows employees to log in, create and add items to checks, and to close those checks with payment.'
                gitFront='https://github.com/tdonovan79/fifteen-minute-food-frontend'
                gitBack='https://github.com/tdonovan79/fifteen_min_backend'
                liveUrl='https://tdonovan79.github.io/basket_front_end/'
                demo='https://www.youtube.com/watch?v=hfgu9UgRhsc'
            />
            <Project
                name='Fifteen Minute Food'
                image={Scooter}
                desc='Fifteen Minute Food is an app for users to order food. The front end is built using React, and the back end with Ruby on Rails. YelpAPI is used to search reatarants and get their information, and StripeAPI is used to process payment. It allows users to search for restaurants, add food items to their cart, checkout and view past orders.'
                gitFront='https://github.com/tdonovan79/fifteen-minute-food-frontend'
                gitBack='https://github.com/tdonovan79/fifteen_min_backend'
                liveUrl='https://tdonovan79.github.io/fifteen-minute-food-frontend/'
                demo='https://www.youtube.com/watch?v=hfgu9UgRhsc'
            />
            <Project
                name='Pokemon Battle'
                image={Pokeball}
                desc='Pokemon Battle is a game for users to have pokemon battles with each other. The front end is built using Vanilla JS and the back end with Ruby on Rails. The available Pokemon are populated with data from PokeAPI. It allows users to choose a team of Pokemon, choose an apponent, and enter into turn-based, two-player battles against each other.'
                gitFront='https://github.com/tdonovan79/pokemon_battle_frontend'
                gitBack='https://github.com/tdonovan79/pokemon-battle-backend'
                liveUrl='https://tdonovan79.github.io/pokemon_battle_frontend/'
                demo='https://www.youtube.com/watch?v=hfgu9UgRhsc'
            />
        </div>
    )
}

// {name, image, desc, gitFront, gitBack, demo}