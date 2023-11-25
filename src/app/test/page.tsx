'use client'
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function test() {
  useEffect(() => {
    gsap.set('.titleScrollAbout', { y: 100 });
    gsap.to('.titleScrollAbout', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top center',
        end: 'bottom 10%',
        scrub: 2,
        markers:true
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: 3.2,
    });
  }, []);


  return (
    <div className='text-white h-full bg-white'>
        <div className='w-24 h-24 bg-red-900 m-2 my-36 '/>

        <div className='w-24 h-24 bg-green-900 m-2 my-36 titleScrollAbout opacity-0'/>
        
        
        <div className='w-24 h-24 bg-pink-900 m-2 my-36 profileImage2'/>

    </div>
  )
}

export default test