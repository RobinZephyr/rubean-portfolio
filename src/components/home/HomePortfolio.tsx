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
<div className={`h-100% w-full text-text bg-bkg justify-center pb-10`}>
      <TitleHome/>
      <div className='px-5 w-full flex justify-center items-center md:mt-14'>
        <div className=' md:space-x-10 md:flex md:h-60%  items-center '>
          <div className=' md:min-w-[260px]  md:min-h-[270px] w-full flex pt-20 md:pt-20 '>
            <AvatarHomeAnimation/>
          </div>

          <div className=' w-full' >
            <div className=' w-full flex justify-center HomeTextbox '>
              <HomeTextbox/>
            </div>

            <div className='flex  pt-2 items-center justify-between'>
              <ContactLinks/>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
