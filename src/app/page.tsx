'use client'
import AboutPortfolio from '@/components/about/AboutPortfolio'
import HomePortolio from '@/components/home/HomePortfolio'
import { AnimationTransition } from '@/constant/animationTransition';
import Image from 'next/image'
import gsap from 'gsap'
import ProjectPortfolio from '@/components/projects/ProjectPortfolio';
import ContactPortfolio from '@/components/contact/ContactPortfolio';
import { useEffect, useState } from 'react';
import HeadersPortfolio from '@/components/layout/HeadersPortfolio';

// Rest of your code...

export default function Home() {

 
  
  return (
    <main className='w-full flex h-full overflow-x-none bg-bkg'  >
      <div className="w-full h-full  flex-col  " >
        <HeadersPortfolio/>
        <div  id="home" className='h-full'>
          <HomePortolio />
        </div>
        <div  id="about" className='h-full overflow-x-none w-100%' style={{overflowX:'hidden'}}>
          <AboutPortfolio/>
        </div>
        <div  id="projects" className='h-full overflow-x-none w-full' style={{overflowX:'hidden'}}>
          <ProjectPortfolio/>
        </div>
        <div  id="contact"className='h-full overflow-x-none w-full pt-10' style={{overflowX:'hidden'}}>
          <ContactPortfolio/>
        </div>
      </div>  

    </main>
  )
}
