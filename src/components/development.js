import React from 'react'
import './development.scss'

export default function Development(props) {

    return (
        <div className='presentu-fn-comp-approach' >
            <div className='content-width-rule fc'>
                <div id='skills' className='presentu-development-content' >

                    <div id='column' className='presentu-development-boxes' >    
                        <div className='box'>
                            
                            <div className='flex-divider'>
                                <img src={props.data.prismicDevelopment.data.image.url} />
                            </div>
                            <div className='flex-divider'>
                                <h4>{props.data.prismicDevelopment.data.ontwikkeling.text}</h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicDevelopment.data.content.html,
                                    }}
                                />                            
                            </div>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
