import React from 'react'
import './footer.scss'

const facebook = require('../../static/images/social/facebook.svg');
const instagram = require('../../static/images/social/instagram.svg');
const linkedin = require('../../static/images/social/linkedin.svg');


export default function Footer() {
    return (
        <div className='presentu-fn-comp-footer' >
            <div className='content-width-rule fr'>
                <div className='footer'>
                    <div className='year block'>
                        <h5>PresentU — {new Date().getFullYear()}.</h5>
                    </div>
                    <div className='extra block'>
                        {/* <h5></h5>
                        <p></p> */}
                    </div>                    
                    <div className='block'>
                        <h5>Social</h5>
                        <div className='icontab'>
                            <a target="_blank" className='icon' alt='Facebook' href="https://www.facebook.com/presentu/"><img src={facebook}/></a>
                            <a target="_blank" className='icon' alt='Instagram' href="https://www.instagram.com/presentu_training/"><img src={instagram}/></a>
                            <a target="_blank" className='icon' alt='LinkedIn' href="https://www.linkedin.com/company/presentu/"><img src={linkedin}/></a>
                        </div>
                    </div>
                    <div className='block'>
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