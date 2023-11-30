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
    document.body.style.overflow = 'hidden';
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4700);
    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (link: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
<div className='mb-[5rem]  ' >

    <div className='pt-5 md:pt-0 '>
        <TitleHome/>
      </div>     
   <div className='px-5 w-full h-full md:h-50% flex  justify-center items-center md:mt-14     '>

          <div className=' md:gap-5 md:flex items-center md:mt-0 pt-14 '>
            <div className='  md:w-80% w-full md:justify-end flex  '>
              <AvatarHomeAnimation/>
            </div>
            <div className='h-screen w-full m-0 p-0 bg-black absolute top-0 left-0 BgPitchBack  ' />

            <div className='  items-center  flex justify-center'>
              <div className='  w-full min-w-[300px] h-[200px] xmd:max-w-[370px] md:w-[400px] md:max-w-[470px] '>
              <div className='flex w-full justify-start opacity-0 HomeTextbox text-text '>
                  <HomeTextbox/>
              </div>
              <div className='flex w-full pt-2 items-center justify-between ContactAndDownload opacity-0'>
                <ContactLinks/>
                <DownloadCvButton/>
              </div>                
            </div>

            </div>
          </div> 
      </div>

    </div>
  );
}
