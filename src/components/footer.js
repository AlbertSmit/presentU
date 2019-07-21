import React from 'react'

import './footer.scss'

export default function Footer() {
    return (
        <div className='presentu-fn-comp-footer' >
            <div className='content-width-rule fr'>
                <div className='footer'>
                    <div>
                        <h5>PresentU — {new Date().getFullYear()}.</h5>
                    </div>
                    <div>
                        {/* <h5></h5>
                        <p></p> */}
                    </div>                    
                    <div>
                        <h5>Social</h5>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
                    <div>
                        <h5>Adres</h5>
                        <p>Dingesgebouw</p>
                        <p>Somestreet 34-a</p>
                        <p>7777 AB  Utrecht</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// {new Date().getFullYear()}. Built with love.