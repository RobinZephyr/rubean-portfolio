"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import AboutTitle from './TitleAbout';
import { rubeanProflie } from '@/assets';
import Image from 'next/image';
import AvatarAboutAnimation from './AvatarAboutAnimation';
import AboutTextbox from './AboutTextbox';
import { AnimationTransition } from '@/constant/animationTransition';
import TextOrb from './TextOrb';

export default function AboutPortfolio() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  useEffect(() => {
    gsap.to('.custard', {
      scrollTrigger: {
        trigger: '.custard',
        scrub: true,
        start: 'top center',
        end: 'top 100px',
      },
      x: 400,
      duration: 2,
    });
  }, []);
  
  return (
    <div className='h-full w-full  text-text  bg-bkg  pt-5 loadinPage hidden  '>
      <div>
        <AboutTitle/>
      </div>

      <div className='mt-8 p-5 md:grid md:grid-cols-2 md:gap-4 '>
        <div className='w-full h-full flex  justify-center md:p-5 '>
          <Image src={rubeanProflie} alt="Please dont Look" className='w-56 h-72 md:w-80% md:min-w-[300px] md:min-h-[500px] md:h-80% object-cover rounded-full '/>
        </div>
        <div className='mt-5 md:mt-0 md:p-5 '>
          <div className=''>
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
