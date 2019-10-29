import React from 'react'
import './approach.scss'

export default function Approach(props) {
    return (
        <div id='werkwijze' className='presentu-fn-comp-approach' >
            <div className='content-width-rule fc'>
                <div id='skills' className='presentu-approach-content' >

                    <div id='column' className='presentu-approach-boxes' >                       
                        <div className='image'><img src={props.data.prismicApproach.data.basisvaardigheden_image.url}/></div>
                        <h3 className='pre'>1</h3>
                        <div className='box'>
                            <h3 className='text-white'>{props.data.prismicApproach.data.basisvaardigheden__title.text}</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.basisvaardigheden_wat_je_leert.html,
                                    }}
                                />
                            </div>
                            <div className='spacer'>
                                <h5>Aan de hand van</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.basisvaardigheden_aan_de_hand_van.html,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div id='column' className='presentu-approach-boxes' >
                        <div className='image'><img src={props.data.prismicApproach.data.story_skills_image.url}/></div>
                        <h3 className='pre'>2</h3>
                        <div className='box'>
                            <h3 className='text-white'>{props.data.prismicApproach.data.story_skills_title.text}</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.story_skills_aan_de_hand_van.html,
                                    }}
                                />
                            </div>
                            <div className='spacer'>
                                <h5>Aan de hand van</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.story_skills_wat_je_leert.html,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div id='column' className='presentu-approach-boxes' >
                        <div className='image'><img src={props.data.prismicApproach.data.expertvaardigheden_image.url}/></div>
                        <h3 className='pre'>3</h3>
                        <div className='box'>
                            <h3 className='text-white'>{props.data.prismicApproach.data.expertvaardigheden_title.text}</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.expertvaardigheden_wat_je_leert.html,
                                    }}
                                />
                            </div>
                            <div className='spacer'>
                                <h5>Aan de hand van</h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.data.prismicApproach.data.expertvaardigheden_aan_de_hand_van.html,
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
