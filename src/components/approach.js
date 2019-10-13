import React from 'react'
import './approach.scss'

export default function Approach(props) {

    return (
        <div className='presentu-fn-comp-approach' >
            <div className='content-width-rule fc'>
                <div className='presentu-approach-content' >

                    <div className='presentu-approach-boxes' >
                        <h3 className='pre'>1</h3>
                        <div className='box'>
                            <h3 className='text-white'>Basisvaardigheden</h3>
                            <hr/>
                            <h5>Wat je leert</h5>
                            <ul>
                                <li>Plezier in presenteren</li>
                                <li>Controle over zenuwen</li>
                                <li>Technische vaardigheden</li>
                                <li>Ontdek je stijl</li>
                            </ul>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div className='presentu-approach-boxes' >
                        <h3 className='pre'>2</h3>
                        <div className='box'>
                            <h3 className='text-white'>Story skills</h3>
                            <hr/>
                            <h5>Wat je leert</h5>
                            <ul>
                                <li>Je eigen verhaal vertellen</li>
                                <li>Een verhaal opbouwen</li>
                                <li>Schrijven voor verschillend publiek</li>
                            </ul>
                        </div>
                    </div>

                    <div className='presentu-approach-spacer' >
                        <h3 className='arrow'>→</h3>
                    </div>

                    <div className='presentu-approach-boxes' >
                        <h3 className='pre'>3</h3>
                        <div className='box'>
                            <h3 className='text-white'>Expertvaardigheden</h3>
                            <hr/>
                            <h5>Wat je leert</h5>
                            <ul className='what'>
                                <li>De goede keuzes maken in je presentatie</li>
                                <li>Aanpassen aan verschillend publiek</li>
                                <li>Overtuigen, impact maken</li>
                                <li>Controle over stem, ruimte, lichaam</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
