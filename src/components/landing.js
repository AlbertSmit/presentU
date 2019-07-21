import React from 'react'
import './landing.scss'

const temp = 'http://presentu.nl/images/Middel-47dff-p-500.png';

export default function Landing(props) {
    return (
        <div className='presentu-fn-comp-landing' >
            <div className='content-width-rule fr' >
                <div className='presentu-landing-hero-image'>
                    <img src={temp}></img>
                </div>
                <div className='presentu-landing-hero-content' >
                    <h1>
                        {props.data.prismicFocus.data.koptekst.text}
                    </h1>
                    <p>
                        {props.data.prismicFocus.data.broodtekst.text}
                    </p>
                </div>
            </div>
        </div>
    )
}