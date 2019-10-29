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
        .then(res => {
            console.log(res)
            console.log(res.status)
        })
        .catch(e => console.error(e))
    }

    console.log(props)
    return (
        <div id='contact' className='presentu-fn-comp-contact' >
            <div className='content-width-rule fc'>
                <h2 className='text-pink' >
                    <div className='html' dangerouslySetInnerHTML={{ __html: props.data.prismicContact.data.content.html, }}/>
                </h2>
                <Form
                    id="invisible-recaptcha-form"
                    onSubmit={sendForm}
                    initialValues={{ name: '', email: '', text: '' }}
                    render={({ handleSubmit, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>

                            <div className='contact-div'>
                                <label>Tekst</label>
                                <Field 
                                name="text" 
                                component="textarea" 
                                type="text"
                                placeholder="Type hier je bericht." 
                                className='contact-field-area'
                                />
                            </div>

                            <div className='contact-div'>
                                <label>Mijn naam is</label>
                                <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Pieter Peters"
                                className='contact-field'
                                />
                            </div>
                        
                            <div className='contact-div'>
                                <label>Ik ben digitaal te bereiken op</label>
                                <Field
                                name="email"
                                component="input"
                                type="email"
                                placeholder="info@voorbeeld.com"
                                className='contact-field'
                                />
                            </div>
                            
                            <div className='contact-div'>
                                <label>En je kunt mij telefonisch bereiken op</label>
                                <Field
                                name="number"
                                component="input"
                                type="tel"
                                placeholder="06 – 1212 3434"
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
