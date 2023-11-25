import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextOrb() {
  return (
    <div className='w-full border-2 border-red-900 py-2'>
      <div className='w-10 h-10 bg-red-900 rounded-full custard' />
    </div>
  );
}

export default TextOrb;
