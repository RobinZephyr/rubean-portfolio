import React from 'react'
import ContactNamplate from './ContactNamplate'
import ContactForm from './ContactForm'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import Image from 'next/image'
import { logoDarkMode, logoLightMode, stamp } from '@/assets'
function ContactMeContainer() {

    
  return (
    <div className='w-full'>
        <div className=' relative abslolute pb-4'>
            <ContactNamplate name="Lets Talk!"/>
        </div>
        <div className='md:grid md:grid-cols-2 w-full border-letterBorderColor border-2 py-2 pt-5 px '>
            <div className='flex justify-center w-full'>
                <ContactForm/>
            </div>
             
          
            <div className=' w-full text-text relative px-4 mt-5 justify-center md:justify-center  flex md:items-end '>
                <div className='absolute top-[0px] hidden md:flex justify-center'>
                    <Image src={stamp} alt='stamp' className='w-40% h-40%'/>
                </div>


                <div className='md:h-60% max-w-[500px] w-full md:hidden    '>
                    <div className=' underline text-xl  left-0 relative'>
                        Personal Contacts:
                    </div>
                    <div className='text-lg  md:text-xl flex items-center mt-3 '>
                        <span className=''>
                            <FaEnvelope/>
                        </span>
                        <span className='pl-2'>rubeanrakeru@gmail.com</span>
                    </div>
                    <div className='text-lg md:text-xl flex items-center  mt-2 '>
                        <FaPhone/>
                        <span className='pl-2'>0999-9999-999</span>
                    </div>
                </div>

                <div className='  md:block hidden  '>
                    <div className=' underline text-xl  left-0 relative'>
                        Personal Contacts:
                    </div>
                    <div className='text-lg md:text-xl flex items-center mt-3 whitespace-nowrap '>
                        <span className=''>
                            <FaEnvelope/>
                        </span>
                        <span className='pl-2'>rubeanrakeru@gmail.com</span>
                    </div>
                    <div className='text-lg md:text-xl flex items-center  mt-2 '>
                        <FaPhone/>
                        <span className='pl-2'>0999-9999-999</span>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ContactMeContainer