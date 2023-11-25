'use client'
import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function test() {
    useEffect(() => {
        gsap.to('.profileImage2', {
            y: -30,
            ease: "sine.out",
            yoyo:true,
            repeat:-1,
            duration:1,
          });
      }, []);


  return (
    <div className='text-white h-full bg-white'>
        <div className='w-24 h-24 bg-red-900 m-2 my-36 profileImage2'/>

        <div className='w-24 h-24 bg-green-900 m-2 my-36'/>
        
        
        <div className='w-24 h-24 bg-pink-900 m-2 my-36 profileImage2'/>

    </div>
  )
}

export default test