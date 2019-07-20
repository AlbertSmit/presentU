import React from 'react'
import { Form, Field } from 'react-final-form'

import './contact.scss'

export default function Contact(props) {

    const sendForm = async data => {
        fetch('https://usebasin.com/f/ff795e1aa536',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .catch(e => console.error(e))
    }

    return (
        <div className='presentu-fn-comp-contact' >
            <div className='content-width-rule fc'>
                <h1 className='text-pink' >Contact.</h1>
                <h2 className='text-pink' >
                    {props.data.prismicFocus.data.contact.text}
                </h2>
                <Form
                    id="invisible-recaptcha-form"
                    onSubmit={sendForm}
                    initialValues={{ name: '', email: '', text: '' }}
                    render={({ handleSubmit, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='contact-div'>
                                <label>Naam</label>
                                <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Jouw naam"
                                className='contact-field'
                                />
                            </div>
                            
                            <div className='contact-div'>
                                <label>Email</label>
                                <Field
                                name="email"
                                component="input"
                                type="text"
                                placeholder="info@voorbeeld.com"
                                className='contact-field'
                                />
                            </div>

                            <div className='contact-div'>
                                <label>Tekst</label>
                                <Field 
                                name="text" 
                                component="textarea" 
                                type="text"
                                placeholder="Typ hier je tekst" 
                                className='contact-field'
                                />
                            </div>
                            
                            <input type="hidden" name="_gotcha"></input>
                            {/* <div class="g-recaptcha" data-sitekey="6LcGYawUAAAAABXzvzccHXKiHuI1_uCRSu7Oyj4I"></div> */}

                            <div className="contact-button">
                                <button 
                                    type="submit" 
                                    disabled={submitting || pristine}>
                                Klik
                                </button>

                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    )
}
