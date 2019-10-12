import React from 'react'
import { Link } from 'gatsby'
import './about.scss'

export default function About(props) {
    return (
        <div id='wie' className='presentu-fn-comp-about' >
            <div className='content-width-rule fc'>
                <div className='about-text-splitter' >
                    <div className='about-text-who' >
                        <h1>{props.data.prismicFocus.data.over.text}</h1>
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
