import React from 'react'
import { Link } from 'gatsby'
import './about.scss'

export default function About(props) {
    return (
        <div className='presentu-fn-comp-about' >
            <div className='content-width-rule fc'>
                <div className='about-text-splitter' >
                    <div className='about-text-who' >
                        <h1>{props.data.prismicFocus.data.over.text}</h1>
                    </div>
                </div>
                <div className='about-text-splitter' >
                    <div className='about-text-block' >
                        <p>
                            {props.data.prismicFocus.data.over_content.text}
                        </p>
                        <Link to="/page-2/">Meer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
