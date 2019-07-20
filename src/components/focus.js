import React from 'react'
import './focus.scss'

const image = 'temp.jpg'

export default function Focus(props) {
    return (
        <div className='presentu-fn-comp-focus' >
            <div className='content-width-rule fr'>
                <div className='presentu-focus-u-decorator' ></div>
                    <div className='presentu-focus-items' >
                        <div className='presentu-focus-row' >
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{props.data.prismicFocus.data.stem.text}</h3>
                                <p>{props.data.prismicFocus.data.stem_content.text}</p>
                            </div>
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{props.data.prismicFocus.data.fysiek.text}</h3>
                                <p>{props.data.prismicFocus.data.fysiek_content.text}</p>
                            </div>
                        </div>
                        <div className='presentu-focus-row' >
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{props.data.prismicFocus.data.contact.text}</h3>
                                <p>{props.data.prismicFocus.data.contact_content.text}</p>
                            </div>
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{props.data.prismicFocus.data.resultaatgericht.text}</h3>
                                <p>{props.data.prismicFocus.data.resultaat_content.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
