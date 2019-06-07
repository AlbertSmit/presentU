import React from 'react'
import Image from './image'
import './landing.css'

export default function Landing(props) {
    return (
        <div className='presentu-fn-comp-landing' >
            <div className='content-width-rule fr' >
                <div className='presentu-landing-hero-image'>
                    <Image />
                </div>
                <div className='presentu-landing-hero-content' >
                    <h1 className='landing-hero-text-large' >
                        {props.data.prismicFocus.data.koptekst.text}
                    </h1>
                    <p className='landing-hero-text-medium' >
                        {props.data.prismicFocus.data.broodtekst.text}
                    </p>
                </div>
            </div>
        </div>
    )
}