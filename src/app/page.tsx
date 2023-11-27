'use client'
import AboutPortfolio from '@/components/about/AboutPortfolio'
import HomePortolio from '@/components/home/HomePortfolio'
import { AnimationTransition } from '@/constant/animationTransition';
import Image from 'next/image'
import { useEffect } from 'react';
import gsap from 'gsap'
import ProjectPortfolio from '@/components/projects/ProjectPortfolio';
import ContactPortfolio from '@/components/contact/ContactPortfolio';
export default function Home() {

 
  
  return (
    <main className='w-full flex h-full overflow-x-none bg-bkg'  >
      <div className="w-full h-full  flex-col  " >
        <div className='h-full'>
          <HomePortolio/>
        </div>
        <div className='h-full overflow-x-none w-full'>
          <AboutPortfolio/>
        </div>
        <div className='h-full overflow-x-none w-full'>
          <ProjectPortfolio/>
        </div>
        <div className='h-full overflow-x-none w-full pt-10'>
          <ContactPortfolio/>
        </div>
      </div>  

    </main>
  )
}
