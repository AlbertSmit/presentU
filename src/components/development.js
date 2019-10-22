import React from 'react'
import './development.scss'

const imgtemp = "https://presentu.nl/images/Middel-14d.png";

export default function Development(props) {

    return (
        <div className='presentu-fn-comp-approach' >
            <div className='content-width-rule fc'>
                <div id='skills' className='presentu-development-content' >

                    <div id='column' className='presentu-development-boxes' >    
                        <div className='box'>
                            
                            <div className='flex-divider'>
                                <img src={imgtemp} />
                            </div>
                            <div className='flex-divider'>
                                <h4>persoonlijke ontwikkeling</h4>
                                <p>In onze trainingen ga je aan de slag met persoonlijke thema’s en uitdagingen. Zaken die je in je presentatie tegenkomt kom je waarschijnlijk vaker tegen. In de trainingen gaan we hiermee op presentatiegebied aan de slag.</p>
                            </div>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
