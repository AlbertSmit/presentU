import React from 'react'
import { Link } from 'gatsby'

import './menu.scss'

export default function menu() {
    return (
        <div className='menu'>
            <h6 className='slogan'>Kies hoe je overkomt.</h6>
            <Link to='/'><h6>Home</h6></Link>
            {/* Links to page-section for now */}
            <Link to='#werkwijze'><h6>Werkwijze</h6></Link>
            {/* Links to page section for now */}
            <Link to='#focus'><h6>Focus</h6></Link>
            {/* fix contact, cant access from every page */}
            <a href='#contact'><h6>Contact</h6></a>
        </div>
    )
}
