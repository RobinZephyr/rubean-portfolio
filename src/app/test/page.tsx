'use client';
import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from 'react-fast-marquee'
import Image from 'next/image';
import { skills } from '@/constant/skills';
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
    <div className='text-white h-screen bg-white'>
      <div className='border-2 border-red-900 w-[500px] py-3' style={{overflowY:'hidden'}}>
      <Marquee className=' '>
        {skills.map((skill) => (
            <div key={skill.id} className='min-w-[5rem] relative fadeAnimationSkills mr-3'>

              {/* Hover Show */}
              <div
                className=' h-full absolute top-0 left-0 w-full'>
                <span className='absolute flex bgSkillSelect opacity-0   w-full h-full text-white text-xs '>
                  <div className='w-full h-full flex  items-center justify-center border-4  border-white rounded-sm '>
                    <span className='m-1'>
                    {skill.skill}
                    </span>
                  </div>
                  <div className=' skillButton absolute  w-full h-full bg-opacity-70 hover:bg:black-900'/>
                </span>
              </div>

              {/* Container for skill image */}
              <div className='px-2 w-full h-full py-1  item bg-textbox shadow-sm w-[5rem]'>
                <Image src={skill.image} alt={skill.skill} className='' title={skill.skill} />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

    </div>
  );
}

export default Test;
