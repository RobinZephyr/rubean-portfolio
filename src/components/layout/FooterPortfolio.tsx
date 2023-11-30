import { logoDarkMode } from '@/assets'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import Image from 'next/image'
function FooterPortfolio() {
  return (
    <div className='  w-full text-text flex justify-center  bg-bkg items-center py-2 '>
        <div className='w-full flex justify-center bg-border border-content  border-b-2 py-2 border-t-2 '>
        <div className=' flex items-center justify-start w-90% max-w-[450px] md:max-w-[800px] '>
           <div className=' flex-wrap text-sm md:text-lg w-full'>
            <span className=''>
             Copyright © 2023 Esguerra
            </span>
           </div>
           <div className='flex w-10% min-w-[70px] md:min-w-[100px] text-2xl md:text-3xl  '>
                <div className='flex justify-evenly  w-full'>
                <span>
                    <a href="https://www.facebook.com/profile.php?id=100006948285802" className='flex justify-center' >
                        <FaFacebook/>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/rubean-esguerra-a53151117/" className='flex justify-center' >
                        <FaLinkedin/>
                    </a>
                </span>
                </div>
           </div>
        </div>
        </div>

    </div>
  )
}

export default FooterPortfolio