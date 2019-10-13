import React from 'react'
import './whowhatwhere.scss'

export default function WhoWhatWhere(props) {

    return (
        <div className='presentu-fn-comp-whowhatwhere' >
            <div className='content-width-rule fc'>
                <div className='presentu-whowhatwhere-content' >
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicFocus.data.wie.text}</h1>
                        <p>
                            {props.data.prismicFocus.data.wie_content.text}
                        </p>
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicFocus.data.wat.text}</h1>
                        <p>
                            {props.data.prismicFocus.data.wat_content.text}
                        </p>
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicFocus.data.waarom.text}</h1>
                        <p>
                            {props.data.prismicFocus.data.waarom_content.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
