import React from 'react'
import './thanks.scss'

const landing = require('../../static/images/Landing.png')

export default function Thanks() {
    return (
        <div className='presentu-fn-comp-thanks' >
            <div className='content-width-rule fr' >
                <div className='presentu-thanks-hero-image'>
                    <img src={landing}></img>
                </div>
                <div className='presentu-thanks-hero-content' >
                    <h1>
                        Bedankt voor je mail!
                    </h1>
                    <p>
                        We zullen je zo snel mogelijk een antwoord sturen.
                    </p>
                    <a href='https://www.presentu.nl'>
                        Stuur me terug naar de thuispagina!
                    </a>
                </div>
            </div>
        </div>
    )
}