import React from 'react'
import './menu.scss'

export default function menu() {
    return (
        <div className='menu'>
            <h6 className='slogan'>Kies hoe je overkomt.</h6>
            <a href='https://www.presentu.nl/#werkwijze'><h6>Werkwijze</h6></a>
            <a href='https://www.presentu.nl/#focus'><h6>Focus</h6></a>
            <a href='https://www.presentu.nl/#docenten'><h6>Docenten</h6></a>
            <a href='https://www.presentu.nl/#contact'><h6>Contact</h6></a>
        </div>
    )
}
