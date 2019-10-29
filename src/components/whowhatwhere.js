import React from 'react'
import './whowhatwhere.scss'

export default function WhoWhatWhere(props) {
    return (
        <div className='presentu-fn-comp-whowhatwhere' >
            <div className='content-width-rule fc'>
                <div className='presentu-whowhatwhere-content' >
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhy.data.wie.text}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.prismicWhoWhatWhy.data.wie_content.html,
                            }}
                        />
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhy.data.wat.text}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.prismicWhoWhatWhy.data.wat_content.html,
                            }}
                        />
                    </div>
                        <div className='presentu-whowhatwhere-spacer' ></div>
                    <div className='presentu-whowhatwhere-boxes' >
                        <h1 className='text-white' >{props.data.prismicWhoWhatWhy.data.waarom.text}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.prismicWhoWhatWhy.data.waarom_content.html,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
