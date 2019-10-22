import React from 'react'
import './approach.scss'

const imgtemp = "https://presentu.nl/images/Middel-14d.png";

export default function Approach(props) {

    return (
        <div className='presentu-fn-comp-approach' >
            <div className='content-width-rule fc'>
                <div id='skills' className='presentu-approach-content' >

                    <div id='column' className='presentu-approach-boxes' >                       
                        <div className='image'><img src={imgtemp}/></div>
                        <h3 className='pre'>1</h3>
                        <div className='box'>
                            <h3 className='text-white'>Basisvaardigheden</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <ul>
                                    <li>Plezier in presenteren</li>
                                    <li>Controle over zenuwen</li>
                                    <li>Technische vaardigheden</li>
                                    <li>Ontdek je stijl</li>
                                </ul>
                            </div>
                            <h5>Aan de hand van</h5>
                            <ul className='what'>
                                <li>0-meting</li>
                                <li>Persoonlijk ontwikkelplan</li>
                                <li>Basistraining presentatie</li>
                                <li>Uitgebreide feedback van trainers en deelnemers</li>
                            </ul>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div id='column' className='presentu-approach-boxes' >
                        <div className='image'><img src={imgtemp}/></div>
                        <h3 className='pre'>2</h3>
                        <div className='box'>
                            <h3 className='text-white'>Story skills</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <ul>
                                    <li>Je eigen verhaal vertellen</li>
                                    <li>Een verhaal opbouwen</li>
                                    <li>Schrijven voor verschillend publiek</li>
                                </ul>
                            </div>
                            <h5>Aan de hand van</h5>
                            <ul className='what'>
                                <li>Story-telling training I & II</li>
                                <li>Proces van schaven en verbeteren</li>
                                <li>Leren wat werkt en niet werkt voor jou</li>
                            </ul>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div id='column' className='presentu-approach-boxes' >
                        <div className='image'><img src={imgtemp}/></div>
                        <h3 className='pre'>3</h3>
                        <div className='box'>
                            <h3 className='text-white'>Expertvaardigheden</h3>
                        </div>
                        <div className='subbox'>
                            <div className='spacer'>
                                <h5>Wat je leert</h5>
                                <ul className='what'>
                                    <li>Oefenen voor groepen</li>
                                    <li>Uitgebreide aandacht voor jouw focuspunten bij presenteren</li>
                                    <li>Integreren van vaardigheden uit I & II</li>
                                </ul>
                            </div>
                            <h5>Aan de hand van</h5>
                            <ul className='what'>
                                <li>0-meting</li>
                                <li>Persoonlijk ontwikkelplan</li>
                                <li>Basistraining presentatie</li>
                                <li>Uitgebreide feedback van trainers en deelnemers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
