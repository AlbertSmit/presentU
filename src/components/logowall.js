import React from 'react'
import './logowall.css'

const logoSources = [
    'image',
    'image',
    'image',
    'image',
    'image',
    'image',
    'image',
    'image',
    'image'
]

export default function LogoWall() {
    return (
        <div className='presentu-fn-comp-logowall' >
            <div className='logowall-hero-text'>
                <h1>Logo Wall.</h1>
            </div>
            <div className='logowall-collection'>
                {logoSources.map(i => <div className='logowall-item'><img className='logowall-center' src={i} height='100' /></div>)}
            </div>
        </div>
    )
}
