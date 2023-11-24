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
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

export default function AboutPortfolio() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  return (
    <div className='h-full w-full  text-text  bg-bkg flex-col   pt-5 loadinPage hidden'>
      <div>
        <AboutTitle/>
      </div>

      <div className='mt-8 p-5 '>
        <div className='w-full h-full flex justify-center'>
          <Image src={rubeanProflie} alt="Please dont Look" className='w-56 h-72 object-cover rounded-full '/>
        </div>
        <div className='mt-5'>
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
