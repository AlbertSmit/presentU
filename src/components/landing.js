import React from 'react'
import './landing.scss'

const landing = require('../static/images/Landing.png')
const m = require('../static/images/M.svg')
const s = require('../static/images/S.svg')

const colors = [
    '#c5d0d2',
    '#265880',
    '#e73040',
    '#fbd4cd',
    '#e46c76'
];

function randomColor() {
    const random = Math.ceil(Math.random() * 5);
    return colors[random]
}

const currentColor = randomColor();

export default function Landing(props) {
    return (
        <div className='presentu-fn-comp-landing' >
            <div className='content-width-rule fr' >
                <div className='presentu-landing-hero-image'>
                    <img src={landing}></img>
                </div>
                <div className='presentu-landing-hero-content' >
                    <h1>
                        Bij PresentU geloven wij, 
                        Maarten <span style={{color: currentColor}}>( <img src={m}></img> )</span> en Sus <span style={{color: currentColor}}>( <img src={s}></img> )</span>, 
                        dat iedereen kneitergoed kan leren presenteren.
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: props.data.prismicHomepageSubHeader.data.subheader.html,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}