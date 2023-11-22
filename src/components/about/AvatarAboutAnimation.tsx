import { avatarTadaUp } from '@/assets'
import React from 'react'
import Image from 'next/image';
import AboutSkillsmenu from './AboutSkillsmenu';
function AvatarAboutAnimation() {
  return (
    <div className='w-full'>
        <div className='w-70%'>
            <AboutSkillsmenu/>
        </div>
        <Image src={avatarTadaUp} alt="Avatar Skills Present" className=" w-52 h-52 md:w-64 md:h-64 "/>
    </div>
  )
}

export default AvatarAboutAnimation