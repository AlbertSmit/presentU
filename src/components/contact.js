import React from 'react'
import { Form, Input } from '@rocketseat/unform';

export default function Contact() {

    function handleSubmit(data) {
        console.log(data);
    
        /**
         * {
         *   email: 'email@example.com',
         *   password: '123456'
         * }
         */
      }

    return (
        <div className='presentu-fn-comp-contact' >
            <div className='content-width-rule fc'>
                <h1 className='text-pink' >Contact.</h1>
                <h2 className='text-pink' >
                    Geïnteresseerd in een training?

                    Neem contact op.
                    Dan praten we over een training en maken we een offerte.
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Input name="text" />
                    <Input name="email" />
                    <Input name="mobile" />

                    <button type="submit">Klik</button>
                </Form>
            </div>
        </div>
    )
}
