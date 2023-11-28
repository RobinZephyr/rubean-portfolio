"use client";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import AboutTitle from './TitleAbout';

import AvatarAboutAnimation from './AvatarAboutAnimation';
import AboutTextbox from './AboutTextbox';
import { AnimationTransition } from '@/constant/animationTransition';
import ProfileImage from './ProfileImage';

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
      },
      y: 0,
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      delay: 3.3,
    });
    
  }, []);
  
  const [aboutDialog, setAboutDialog] = useState(0);
  return (
    <div className='h-full w-full  text-text justify-center bg-bkg ' >
      <div className=''>
        <AboutTitle/>
      </div>
      
      <div className=' p-5 flex justify-center  w-full'>
        <div className='md:grid md:grid-cols-2 w-full md:gap-4 md:max-w-6xl '>
          <div className=''>
            <ProfileImage setAboutDialog={setAboutDialog}/>
          </div>

          <div className='mt-10 md:mt-0 md:p-5  w-full '>
            <div className='aboutTextboxMobile  opacity-0  '>
              <AboutTextbox/>
            </div>
            <div className=' flex justify-center mt-5    '>
              <AvatarAboutAnimation/>
            </div>
          </div>
        </div>



      </div>


    </div>
  );
}
