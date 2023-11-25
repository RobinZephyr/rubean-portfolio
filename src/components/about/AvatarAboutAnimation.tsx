import { avatarTadaUp, circle } from '@/assets'
import React from 'react'
import Image from 'next/image';
import AboutSkillsmenu from './AboutSkillsmenu';
function AvatarAboutAnimation() {
  return (
    <div className='w-full justify-center h-43% '>
        <div className=' justify-center flex w-full '>
            <AboutSkillsmenu/>
        </div>
        <div className=' justify-center flex w-full h-full  '>
          <div style={{zIndex:'50'}}>
            <Image src={avatarTadaUp} alt="Avatar Skills Present" className=" w-44 h-44 md:w-52 md:h-52 z-20 " />
          </div>
          <div className={`fadeSpotlight absolute bottom-[70px] md:bottom-[170px]`}>
            <Image src={circle} alt='Avatar Spotlight'
             style={{ filter: 'var(--color-avatarSpotlight)' }}
              className='w-48 h-48 md:h-[250px] md:w-[250px] '/>
          </div>
        </div>
    </div>
  )
}

export default AvatarAboutAnimation