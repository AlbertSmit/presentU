import React from 'react'
import './focus.scss'

import { Link } from 'gatsby'

const m = 'https://presentu.nl/images/M.svg'
const s = 'https://presentu.nl/images/S.svg'
const size = 55;

export default function Focus(props) {
    return (
        <div id-='focus' className='presentu-fn-comp-focus' >
            <div className='content-width-rule fr'>
                <div className='presentu-focus-u-decorator' >
                    <h1>U</h1>
                    <h1>U</h1>
                    <h1>U</h1>
                    <h1>U</h1>
                </div>
                <div className='presentu-focus-items' >
                    <div className='presentu-focus-row' >
                        <div className='presentu-focus-column' >
                            <img src={s} alt='temp' height={size} width={size} />
                            <h3 className='focus-title' >{props.data.prismicFocus.data.stem.text}</h3>
                            <p>{props.data.prismicFocus.data.stem_content.text}</p>
                        </div>
                        <div className='presentu-focus-column' >
                            <img src={m} alt='temp' height={size} width={size} />
                            <h3 className='focus-title' >{props.data.prismicFocus.data.fysiek.text}</h3>
                            <p>{props.data.prismicFocus.data.fysiek_content.text}</p>
                        </div>
                    </div>
                    <div className='presentu-focus-row' >
                        <div className='presentu-focus-column' >
                            <img src={m} alt='temp' height={size} width={size} />
                            <h3 className='focus-title' >{props.data.prismicFocus.data.contact.text}</h3>
                            <p>{props.data.prismicFocus.data.contact_content.text}</p>
                        </div>
                        <div className='presentu-focus-column' >
                            <img src={s} alt='temp' height={size} width={size} />
                            <h3 className='focus-title' >{props.data.prismicFocus.data.resultaatgericht.text}</h3>
                            <p>{props.data.prismicFocus.data.resultaat_content.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='more'>
                <Link to='/werkwijze'><h6>meer over onze werkwijze</h6></Link>
            </div>
        </div>
    )
}
