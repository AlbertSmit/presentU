import React from 'react'
import './focus.css'

const focusfirst = 'Stem'
const focusfirstcontent = 'We verkennen de mogelijkheden van de stem en werken aan articulatie, intonatie, tempo en volume.'

const focussecond = 'Fysiek'
const focussecondcontent = 'We werken aan jouw fysieke gedragspatronen, ruimtelijk bewustzijn en lichaamshouding en leren je die doelgericht in te zetten.'

const focusthird = 'Contact'
const focusthirdcontent = 'We onderzoeken de relatie tussen spreker en publiek, zodat je spreekt met dynamiek en echt contact maakt met je publiek.'

const focusfourth = 'Resultaatgericht'
const focusfourthcontent = 'We gaan aan de slag met jouw werkpunten en professionele context. We houden een spiegel voor en geven concrete feedback. We trainen op de vloer met praktische werkvormen.'

const image = 'temp.jpg'

export default function Focus() {
    return (
        <div className='presentu-fn-comp-focus' >
            <div className='content-width-rule fr'>
                <div className='presentu-focus-u-decorator' ></div>
                    <div className='presentu-focus-items' >
                        <div className='presentu-focus-row' >
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{focusfirst}</h3>
                                <p className='focus-text-body' >{focusfirstcontent}</p>
                            </div>
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{focussecond}</h3>
                                <p className='focus-text-body' >{focussecondcontent}</p>
                            </div>
                        </div>
                        <div className='presentu-focus-row' >
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{focusthird}</h3>
                                <p className='focus-text-body' >{focusthirdcontent}</p>
                            </div>
                            <div className='presentu-focus-column' >
                                <img src={image} alt='temp' height='50' width='50' />
                                <h3 className='focus-title' >{focusfourth}</h3>
                                <p className='focus-text-body' >{focusfourthcontent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
