import { avatarLaptopBig, circle, rubeanProflie } from '@/assets'
import React, { useState } from 'react'
import Image from 'next/image';
import gsap from "gsap";
import { chatAbout } from '@/constant/chatDialog';
function ProfileImage({onToggleHideProfile}) {

 const [hideProfile, setHideProfile]=useState(false);
 
 const hideProfilePic =()=>{
  if(hideProfile===true){
    return
  }

  setHideProfile(true);
  onToggleHideProfile(true);
  const hideProfilePicOutro = event.currentTarget.querySelector('.hideProfilePicOutro');
  gsap.set(hideProfilePicOutro, { opacity: 1, scaleX: 1 });
  gsap.to(hideProfilePicOutro, {
    display:'none',
    opacity: 0,
    duration: 0,
    scaleX: 0,
    ease: 'power4.out',
    delay: 0,
    onComplete: () => {
      setHideProfile(true);
    },
  });
  
  const showNewPicIntro = event.currentTarget.querySelector('.showNewPicIntro');
  gsap.set(showNewPicIntro, { opacity: 0, scaleX: 0 });
  gsap.to(showNewPicIntro, {
    opacity: 1,
    duration: 0.3,
    scaleX: 1,
    ease: 'power4.out',
    delay: 0,
    display:'block',
    onComplete: () => {
      setHideProfile(true);

    },
  });
 }

  return (
  <div className='w-full h-90%  relative flex justify-center overflow-x-none'>
          <div className='profileImage  opacity-0 w-full h-full flex  justify-center md:p-5 relative ' style={{zIndex:'50'}} onClick={hideProfilePic}> 
              <Image src={avatarLaptopBig} alt="Nvm its fine" className='w-56 h-72 md:w-96 hidden md:h-[530px] object-cover rounded-full showNewPicIntro'
              />
              <div  className='w-56 h-72  md:w-96 md:h-[530px] bg-white object-cover rounded-full  hideProfilePicOutro  '>
                  <Image src={rubeanProflie} alt="Please dont Look" className='w-56 h-72  md:w-96 md:h-[530px] object-cover rounded-full    '/>
              </div>
     

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