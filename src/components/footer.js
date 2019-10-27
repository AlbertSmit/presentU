import React from 'react'

import './footer.scss'

export default function Footer() {
    return (
        <div className='presentu-fn-comp-footer' >
            <div className='content-width-rule fr'>
                <div className='footer'>
                    <div className='year'>
                        <h5>PresentU — {new Date().getFullYear()}.</h5>
                    </div>
                    <div className='extra'>
                        {/* <h5></h5>
                        <p></p> */}
                    </div>                    
                    <div>
                        <h5>Social</h5>
                        <a href="https://www.facebook.com/presentu/">Facebook</a>
                        <a href="https://www.instagram.com/presentu_training/">Instagram</a>
                    </div>
                    <div>
                        <address>
                            <h5>Adres</h5>
                            <p>Van Brakelstraat 11 BS</p>
                            <p>3572 XP  Utrecht</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}

// {new Date().getFullYear()}. Built with love.