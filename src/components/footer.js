import React from 'react'

import './footer.scss'

export default function Footer() {
    return (
        <div className='presentu-fn-comp-footer' >
            <div className='content-width-rule fr'>
                <div className='footer'>
                    <div>
                        <h5>{new Date().getFullYear()}. Built with love.</h5>
                        <p>a</p>
                    </div>
                    <div>
                        <h5>2</h5>
                        <p>b</p>
                    </div>                    
                    <div>
                        <h5>3</h5>
                        <p>c</p>
                    </div>
                    <div>
                        <h5>4</h5>
                        <p>d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// {new Date().getFullYear()}. Built with love.