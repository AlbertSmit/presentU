import React from 'react'
import Image from './image'
import './landing.css'

export default function Landing() {
    return (
        <div className='presentu-fn-comp-landing' >
            <div className='content-width-rule fr' >
                <div className='presentu-landing-hero-image'>
                    <Image />
                </div>
                <div className='presentu-landing-hero-content' >
                    <h1 className='landing-hero-text-large' >
                        Bij PresentU geloven wij, 
                        Maarten ( M ) en Sus ( S ), 
                        dat iedereen kneitergoed kan leren presenteren.
                    </h1>
                    <p className='landing-hero-text-medium' >
                        Dat wij je daarbij kunnen helpen, 
                        door precies de handvatten te geven die je nodig hebt 
                        om kundig en ontspannen te spreken.
                    </p>
                </div>
            </div>
        </div>
    )
}
