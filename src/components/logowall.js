import React from 'react'
import './logowall.scss'

const logoSources = [
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png',
    'http://pngimg.com/uploads/google/google_PNG19644.png'
]

export default function LogoWall(props) {
    return (
        <div className='presentu-fn-comp-logowall' >
            <div className='content-width-rule fc' >
                <div className='logowall-hero-text'>
                    <h1>Tevreden klanten</h1>
                </div>
                <div className='logowall-collection'>
                    {logoSources.map(i => <div className='logowall-item'><img src={i} /></div>)}
                </div>
            </div>
        </div>
    )
}
