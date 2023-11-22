"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import AboutTitle from './TitleAbout';
import { rubeanProflie } from '@/assets';
import Image from 'next/image';
import AvatarAboutAnimation from './AvatarAboutAnimation';
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

export default function AboutPortfolio() {
  useEffect(() => {

  }, []);

  return (
    <div className='h-full w-full  text-text  bg-bkg flex-col border-2 border-black  pt-5 px-3'>
      <div>
        <AboutTitle/>
      </div>

      <div>
        <div className='w-full h-full'>
          <Image src={rubeanProflie} alt="Please dont Look" className='w-50% object-cover rounded-full h-50% '/>
        </div>

        <div>
          <AvatarAboutAnimation/>
        </div>
      </div>
    </div>
  );
}
