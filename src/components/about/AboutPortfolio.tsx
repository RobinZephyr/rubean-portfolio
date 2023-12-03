"use client";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import AboutTitle from './TitleAbout';

import AvatarAboutAnimation from './AvatarAboutAnimation';
import AboutTextbox from './AboutTextbox';
import { AnimationTransition } from '@/constant/animationTransition';
import ProfileImage from './ProfileImage';
import { chatAbout } from '@/constant/chatDialog';

export default function AboutPortfolio() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  useEffect(() => {
    gsap.set('.profileImage', { });
    gsap.to('.profileImage', {
      scrollTrigger: {
        trigger: '.titleScrollAbout',
        start: 'top 60%',
        end: 'bottom 400px',
        scrub: 1,
        once:true
      },
      duration: .5,
      ease: 'power1.out',
      opacity: 1,
      scaleX: 1,
      delay: 2,
    });
    
    gsap.set('.aboutTextboxMobile', { y: 30 });
    gsap.to('.aboutTextboxMobile', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 200px',
        scrub: 1,
        once:true
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: 3.2,
    });

    gsap.set('.aboutSpotlightIntro', {opacity:0});
    gsap.to('.aboutSpotlightIntro', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 400px',
        scrub: 1,
        once:true
      },
      x: 0,
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      delay: 3.2,
    });
    

    gsap.to('.profileImage', {
      y: -20,
      ease: "sine.out",
      yoyo: true,
      repeat: -1,
      duration: 2,
    });
  
    gsap.to('.profileShadow', {
      scale: 0.8,
      ease: "sine.out",
      yoyo: true,
      repeat: -1,
      duration: 2,
    });

    gsap.set('.bgSkillSelectIntro', {opacity:0,y:20});
    gsap.to('.bgSkillSelectIntro', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 200px',
        scrub: 1,
        once:true
      },
      y: 0,
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      delay: 3.2,
    });

    gsap.set('.aboutAvatarIntro', {opacity:0,y:20});
    gsap.to('.aboutAvatarIntro', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 200px',
        scrub: 1,
        once:true
      },
      y: 0,
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      delay: 3.3,
    });
    
  }, []);
  
  const [aboutDialog, setAboutDialog] = useState(0);
  const [hideProfile, setHideProfile]=useState(false);

const increaseAboutDialog = () => {
  setAboutDialog((prev) => {
    let nextDialogIndex = (prev + 1) % 8
    
    gsap.set('.aboutTextboxIntro', { opacity: 0 });
    gsap.to('.aboutTextboxIntro', {
      duration: 0.5,  
      ease: 'power1.inOut',
      opacity: 1,
    });

  if(!hideProfile){  
      while ([1, 2, 3].includes(nextDialogIndex)) {
        nextDialogIndex = (nextDialogIndex + 1) % 8
      }
      if (nextDialogIndex === 8-1) {
        return prev;
      }
    }
    if(hideProfile){
      if (nextDialogIndex === 8-1) {
        return prev;
      }
    }
    return nextDialogIndex;
  });
};

  

useEffect(() => {
  if(hideProfile===true){
    setAboutDialog(1)
  }
}, [hideProfile]);

  
  return (
  <div className='h-full w-full md:mb-[4rem] mb-[2rem] text-text justify-center bg-bkg md:pb-20 lg:h-screen' >
      <div className=''>
        <AboutTitle/>
      </div>
      
      <div className=' p-5 flex justify-center pt-10 h-full w-full flex items-center'>
        <div className='md:grid md:grid-cols-2 md:max-w-7xl md:gap-10  '>
          <div  onClick={increaseAboutDialog} >
            <ProfileImage onToggleHideProfile={setHideProfile} />
          </div>

          <div className='mt-10 md:mt-10 px-3   w-full flex justify-center  '>
            <div className='w-full max-w-[300px] sm:min-w-[350px]  sm:max-w-[400px] flex-col-reverse flex md:flex-col '>
              <div className=' items-center flex   mt-5 md:mt-10'>
                <AvatarAboutAnimation/>
              </div>
              <div className='aboutTextboxMobile items-center flex opacity-0  md:mt-5  '>
                <AboutTextbox aboutDialog={aboutDialog} increaseAboutDialog={increaseAboutDialog} />
              </div>
            </div>
          </div>
        </div>



      </div>


    </div>
  );
}
