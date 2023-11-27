import React from 'react'
import ContactNamplate from './ContactNamplate'
import ContactForm from './ContactForm'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

function ContactMeContainer() {
  return (
    <div className='w-full '>
        <div className=' relative abslolute pb-4'>
            <ContactNamplate name="Lets Talk!"/>
        </div>
        <div className='md:grid md:grid-cols-2 w-full border-white border-2 py-2 pt-5 px'>
            <div>
                <ContactForm/>
            </div>

            <div className='border-2 border-blue-500 w-full text-text px-4 mt-5 justify-end flex items-end '>
                <div>
                    <div className='text-xl flex items-center justify-end'>
                        <span className='mr-3'>rubeanrakeru@gmail.com</span>
                        <FaEnvelope/>
                    </div>
                    <div className='text-xl flex items-center justify-end'>
                        <span className='mr-3'>0999-9999-999</span>
                        <FaPhone/>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ContactMeContainer