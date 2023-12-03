'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../assets/style/header.css'
import '../assets/style/animation.css'
import '../assets/style/elements.css'
import HeadersPortfolio from '@/components/layout/HeadersPortfolio'
import LeftSideBorder from '@/components/layout/LeftSideBorder.'
import RightSideBorder from '@/components/layout/RightSideBorder'
import { useEffect } from 'react'
import { AnimationTransition } from '@/constant/animationTransition'
import gsap from 'gsap'
import FooterPortfolio from '@/components/layout/FooterPortfolio'
import { iconPortfolio } from '@/assets'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AnimationTransition()
    const scrollRestrict = document.querySelectorAll('.scrollbarRestrict');
    window.scrollTo(0, 0);
    gsap.to(scrollRestrict, {
      onComplete: function() {
        scrollRestrict.forEach(element => {
          element.classList.remove('overflow-hidden');
        });
      },
    });
  }, []);
  
  return (
    <>
    <head>
      <title>
        Rubean Rakeru Portfolio
      </title>
    </head>
    <html lang="en">
      <body className='w-full  h-full overflow-x-none overflow-hidden scrollbarRestrict'style={{overflowX:'hidden'}}>
        <div className='flex h-full'>
          <LeftSideBorder/>
            <div className='w-full h-full flex-col '>
                {children}
              <FooterPortfolio/>
            </div>
            <RightSideBorder/>
        </div>
      </body>
    </html>
    </>

  )
}
