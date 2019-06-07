import React from 'react'
import './whowhatwhere.css'

export default function WhoWhatWhere(props) {
    console.log(props.data.prismicWhoWhatWhere.data.waarom.text)

    return (
        <div className='presentu-fn-comp-whowhatwhere' >
            <div className='content-width-rule fc'>
                <div className='presentu-whowhatwhere-content' >
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhere.data.wie.text}</h1>
                        <p>
                            {props.data.prismicWhoWhatWhere.data.wie_content.text}
                        </p>
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhere.data.wat.text}</h1>
                        <p>
                            {props.data.prismicWhoWhatWhere.data.wat_content.text}
                        </p>
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhere.data.waarom.text}</h1>
                        <p>
                            {props.data.prismicWhoWhatWhere.data.waarom_content.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
