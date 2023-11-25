"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import AboutTitle from './TitleAbout';
import { circle, rubeanProflie } from '@/assets';
import Image from 'next/image';
import AvatarAboutAnimation from './AvatarAboutAnimation';
import AboutTextbox from './AboutTextbox';
import { AnimationTransition } from '@/constant/animationTransition';

export default function AboutPortfolio() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  useEffect(() => {
    gsap.set('.profileImage', { x: -100 });
    gsap.to('.profileImage', {
      scrollTrigger: {
        trigger: '.titleScrollAbout',
        start: 'top center',
        end: 'top 400px',
        scrub: 2
      },
      x: 0,
      duration: 2,
      ease: 'power3.out',
      opacity: 1,
      scaleX: 1,
      delay: 3,
      onComplete: () => {
      
      },
    });
    
    gsap.set('.aboutTextbox', { x: 100 });
    gsap.to('.aboutTextbox', {
      scrollTrigger: {
        trigger: '.profileImage', // Updated trigger to '.titleScrollAbout'
        start: 'top center',
        end: 'top 300px',
        scrub: 2,
      },
      x: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: 3.2,
    });

    gsap.to('.profileImage', {
      y: -15,
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
  }, []);
  
  
  return (
    <div className='h-full w-full  text-text  bg-bkg  pt-5 '>
      <div>
        <AboutTitle/>
      </div>

      <div className='mt-8 p-5 md:grid md:grid-cols-2 md:gap-4 '>
        <div className='w-full h-900%  relative flex justify-center'>
          <div className='w-full h-full flex  justify-center md:p-5 profileImage opacity-0 ' style={{zIndex:'50'}}>
            <Image src={rubeanProflie} alt="Please dont Look" className='w-56 h-72 md:w-96 md:h-[600px] object-cover rounded-full '/>
          </div>
          <div className={`absolute bottom-[-10px] md:bottom-[40px] `} >
            <Image src={circle} alt='Avatar Spotlight'
             style={{ filter: 'var(--color-avatarSpotlight) ', zIndex:'10' }}
              className='w-48 h-6 md:h-[20px] md:w-[300px] profileShadow '/>
          </div>
        </div>

        <div className='mt-5 md:mt-0 md:p-5 '>
          <div className='aboutTextbox opacity-0'>
            <AboutTextbox/>
          </div>
          <div className=' flex justify-center mt-12  '>
            <AvatarAboutAnimation/>
          </div>
        </div>


      </div>
    </div>
  );
}
