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
  const [disableScroll, setDisableScroll] = useState(true);

  useEffect(() => {
    AnimationTransition();

    // Disable scroll on mount
    document.body.style.overflow = 'hidden';

    // Enable scroll after 4.7 seconds
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4700);

    // Clean up when the component unmounts or when the timeout completes
    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
<div className={`h-screen w-full bg-bkg justify-center overflow-x-hidden  `}  style={{overflowX:'hidden'}}>

      <TitleHome/>
      <div className='px-5 w-full flex justify-center items-center md:mt-14  '>

          <div className=' md:gap-5 h-full md:flex items-center  '>
            <div className=' md:w-[300px]  md:min-h-[270px] w-full md:justify-end flex pt-20  '>
              <AvatarHomeAnimation/>
            </div>
            <div className='h-screen  w-full m-0 p-0 bg-black  absolute top-0 left-0 BgPitchBack' style={{overflow:'none'}}/>

            <div className=' h-full'>
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
