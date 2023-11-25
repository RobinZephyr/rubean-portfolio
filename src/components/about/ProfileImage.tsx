import { circle, rubeanProflie } from '@/assets'
import React from 'react'
import Image from 'next/image';
function ProfileImage() {
  return (
  <div className='w-full h-90%  relative flex justify-center overflow-x-none'>
     <div className='profileImage  opacity-0 w-full h-full flex  justify-center md:p-5  ' style={{zIndex:'50'}}>
            <Image src={rubeanProflie} alt="Please dont Look" className='w-56 h-72 md:w-96 md:h-[530px] object-cover rounded-full '/>
          </div>
          <div className={`absolute bottom-[-20px] `} >
            <Image src={circle} alt='Avatar Spotlight'
             style={{ filter: 'var(--color-avatarSpotlight) ', zIndex:'10' }}
              className='w-48 h-6 md:h-[20px] md:w-[300px] profileShadow aboutSpotlightIntro opacity-0' />
          </div>
  </div>
  )
}

export default ProfileImage