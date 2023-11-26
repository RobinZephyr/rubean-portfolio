'use client';
import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test() {

  const playNuttonActivate = () => {
    gsap.to('.nuttonActivate', {
      duration: 4,
      ease: 'power2.out',
      opacity: 1,
      x: 400,
    });
  };

  return (
    <div className='text-white h-full bg-white'>
      <div className='w-24 h-24 bg-red-900 m-2 my-36 nuttonActivate' />

      <div className='w-24 h-24 bg-green-900 m-2 my-3   ' onClick={playNuttonActivate}>
        Nutton
      </div>

      <div className='w-24 h-24 bg-pink-900 m-2 my-36 profileImage2' />
    </div>
  );
}

export default Test;
