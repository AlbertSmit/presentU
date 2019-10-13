import React from 'react'
import ReactTooltip from 'react-tooltip'
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
                <div id='collection' className='logowall-collection'>
                    <ReactTooltip effect="solid" className='pU-tip' html='true'/>
                    {props.data.allPrismicClient.edges.map(i => <div 
                        key={i.node.data.name.text} 
                        className='logowall-item' 
                        id='entry'
                        ><img 
                            data-tip={i.node.data.testimonial.html} 
                            src={i.node.data.logo.url} 
                            alt={i.node.data.name.text}/></div>)}
                    {console.log(props)}
                </div>
            </div>
        </div>
    )
}
