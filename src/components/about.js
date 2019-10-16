import React from 'react'

import './about.scss'

const x = "https://presentu.nl/images/Middel-3dff222.png";

export default function About(props) {
    return (
        <div id='wie' className='presentu-fn-comp-about' >
            <div className='content-width-rule fc'>
                <div className='about-text-splitter' >
                    <div className='about-text-who' >
                        <h1>{props.data.prismicFocus.data.over.text}</h1>
                    </div>
                    <div className='illustration'>
                        <img src={x}/>
                    </div>
                </div>
                <div className='about-text-splitter' >
                    <div className='about-text-block' >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.prismicFocus.data.over_content.html,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
