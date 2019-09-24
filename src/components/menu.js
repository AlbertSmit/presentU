import React from 'react'
import { Link } from 'gatsby'

import './menu.scss'

export default function menu() {
    return (
        <div className='menu'>
            <h6 className='slogan'>Presenteren vanuit theatervorm</h6>
            <a href='#wie'><h6>Wie</h6></a>
            <a href='#focus'><h6>Werkwijze</h6></a>
            <Link to='/artikelen'><h6>Artikelen</h6></Link>
            <a href='#contact'><h6>Contact</h6></a>
        </div>
    )
}
