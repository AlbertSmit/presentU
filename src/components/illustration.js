import React from 'react'

import './illustration.scss'

export default function Illustration() {
    const illustration = require('../../static/images/Illustration.png'); 

    return (
        <div className='presentu-fn-comp-illustration'>
            <div className='giant-u-container' >
                {/* <h1>U</h1> */}
                <img src={illustration}></img>
                <div className='speech'> 
                    <h2>waar laat ik mijn handen?</h2>
                </div>
            </div>
        </div>
    )
}
