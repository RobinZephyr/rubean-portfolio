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

  const scrollToSection = (link) => {
    event.preventDefault();
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
<div id="home" className={`w-full bg-bkg justify-center overflow-x-hidden  `}  style={{overflowX:'hidden'}}>

      <TitleHome/>
      <div className='px-5 w-full flex justify-center items-center md:mt-14  '>

          <div className=' md:gap-5 h-full md:flex items-center  '>
            <div className=' md:w-[300px]  md:min-h-[270px] w-full md:justify-end flex pt-20  '>
              <AvatarHomeAnimation/>
            </div>
            <div className='  w-full m-0 p-0 bg-black  absolute top-0 left-0 BgPitchBack' style={{overflow:'none'}}/>

            <div className=' h-full  flex justify-center'>
              <div className=' h-full w-full h-[200px] xmd:w-[400px] lg:w-[500px] '>
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
