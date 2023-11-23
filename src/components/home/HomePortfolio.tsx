"use client";
import React, { useEffect, useState } from 'react';
import TitleHome from './TitleHome';
import AvatarHomeAnimation from './AvatarHomeAnimation';
import { AnimationTransition } from '@/constant/animationTransition';
import HomeTextbox from './HomeTextbox';
import { ContactLinks } from './ContactLinks';
import DownloadCvButton from './DownloadCvButton';
import gsap from "gsap";


export default function HomePortolio() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  return (
<div className={`h-full w-full bg-bkg justify-center  pb-20 `}>
      <div className='h-screen w-screen m-0 p-0  no-overflow bg-black  absolute BgPitchBack'/>
      <TitleHome/>
      <div className='px-5 w-full flex justify-center items-center md:mt-14 '>
          <div className=' h-full md:flex items-center  lg:w-90% gap-5'>
            <div className=' md:min-w-[240px]  md:min-h-[270px] w-full md:justify-end flex pt-20  '>
              <AvatarHomeAnimation/>
            </div>

            <div className=''>
              <div className='flex justify-start opacity-0 HomeTextbox text-text '>
                  <HomeTextbox/>
              </div>
              <div className='flex  pt-2 items-center justify-between ContactAndDownload opacity-0'>
                <ContactLinks/>
                <DownloadCvButton/>
              </div>
            </div>
          </div> 
      </div>

    </div>
  );
}
