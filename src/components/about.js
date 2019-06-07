import React from 'react'
import { Link } from 'gatsby'
import './about.css'

export default function About() {
    return (
        <div className='presentu-fn-comp-about' >
            <div className='content-width-rule fc'>
                <div className='about-text-splitter' >
                    <div className='about-text-who' >
                        <h1 className='text-white' >Wie?</h1>
                    </div>
                </div>
                <div className='about-text-splitter' >
                    <div className='about-text-block' >
                        <p>
                            Een bundeling van vaardigheden tussen een fysiek acteur en 
                            een cabaretier is uniek. Wij ontwerpen onze trainingen op basis 
                            van theatertechnieken uit onze ervaring als spelers.
                        </p>
                        <p>
                            Wij zijn zeer persoonlijk in onze aanpak, we zijn immers maar met twee. 
                            Altijd gericht op jouw actuele werkcontext, geen standaard formats. 
                            Wij brengen de kennis, afgestemd op de behoefte van de klant.
                        </p>
                        <Link to="/page-2/">Meer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
