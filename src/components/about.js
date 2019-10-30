import React from 'react'

import './about.scss'
const about = require('../../static/images/about.png')

export default function About(props) {
    return (
        <div id='wie' className='presentu-fn-comp-about' >
            <div className='content-width-rule fc'>
                <div className='about-text-splitter' >
                    <div className='about-text-who' >
                        <h1>{props.data.prismicAbout.data.who.text}</h1>
                    </div>
                    <div className='illustration'>
                        <img src={about}/>
                    </div>
                </div>
                <div className='about-text-splitter' >
                    <div className='about-text-block' >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.prismicAbout.data.content.html,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
