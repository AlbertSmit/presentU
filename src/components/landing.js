import React from 'react'
import './landing.scss'

const temp = 'https://presentu.nl/images/Middel-47dff-p-500.png';
const m = 'https://presentu.nl/images/M.svg';
const s = 'https://presentu.nl/images/S.svg';

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
                    <img src={temp}></img>
                </div>
                <div className='presentu-landing-hero-content' >
                    <h1>
                        {/* {props.data.prismicFocus.data.koptekst.text} */}
                        Bij PresentU geloven wij, 
                        Maarten <span style={{color: currentColor}}>( <img src={m}></img> )</span> en Sus <span style={{color: currentColor}}>( <img src={s}></img> )</span>, 
                        dat iedereen kneitergoed kan leren presenteren.
                    </h1>
                    <p>
                        {props.data.prismicFocus.data.broodtekst.text}
                    </p>
                </div>
            </div>
        </div>
    )
}