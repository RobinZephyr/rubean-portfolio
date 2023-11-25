'use client'
import AboutPortfolio from '@/components/about/AboutPortfolio'
import HomePortolio from '@/components/home/HomePortfolio'
import { AnimationTransition } from '@/constant/animationTransition';
import Image from 'next/image'
import { useEffect } from 'react';
import gsap from 'gsap'
import ProjectPortfolio from '@/components/projects/ProjectPortfolio';
export default function Home() {

 
  
  return (
    <main className='w-full flex h-full overflow-x-none '  >
      <div className="w-full h-full  flex-col  " >
        <div>
          <HomePortolio/>
        </div>
        <div >
          <AboutPortfolio/>
        </div>
        <div>
          <ProjectPortfolio/>
        </div>
      </div>  

    </main>
  )
}
