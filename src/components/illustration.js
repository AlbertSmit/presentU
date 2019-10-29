import React from 'react'

import './illustration.scss'

export default function Illustration() {
    const g = 'https://presentu.nl/images/Middel-43d.png';

    return (
        <div className='presentu-fn-comp-illustration'>
            <div className='giant-u-container' >
                {/* <h1>U</h1> */}
                <img src={g}></img>
                <div className='speech'> 
                    <h2>waar laat ik mijn handen?</h2>
                </div>
            </div>
        </div>
    )
}
