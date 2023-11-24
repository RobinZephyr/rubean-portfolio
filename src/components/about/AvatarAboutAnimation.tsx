import { avatarTadaUp } from '@/assets'
import React from 'react'
import Image from 'next/image';
import AboutSkillsmenu from './AboutSkillsmenu';
function AvatarAboutAnimation() {
  return (
    <div className='w-full justify-center '>
        <div className=' justify-center flex w-full '>
            <AboutSkillsmenu/>
        </div>
        <div className=' justify-center flex w-full slide '>
         <Image src={avatarTadaUp} alt="Avatar Skills Present" className=" w-44 h-44 md:w-52 md:h-52 "/>
        </div>
    </div>
  )
}

export default AvatarAboutAnimation