'use client';
import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from 'react-fast-marquee'
import Image from 'next/image';
import { skills } from '@/constant/skills';
import { avatarLaptopBig, rubeanProflie } from '@/assets';
gsap.registerPlugin(ScrollTrigger);


function Test() {
  const [hideProfile, setHideProfile] = useState(false);

  const hideProfilePic = (event: React.MouseEvent<HTMLDivElement>) => {
    const hideProfilePicOutro = event.currentTarget.querySelector('.hideProfilePicOutro');
    const showNewPicIntro = event.currentTarget.querySelector('.showNewPicIntro');
    gsap.set(showNewPicIntro, { opacity: 0, scaleX: 0 });
    gsap.to(hideProfilePicOutro, {
      opacity: 0,
      scaleX: 0,
      duration: 0.3,
      ease: 'power4.out',
      onComplete: () => {
        setHideProfile(!hideProfile);
        gsap.set(hideProfilePicOutro, { display: 'none' });
        gsap.set(showNewPicIntro, { display: 'block' });
        gsap.fromTo(
          showNewPicIntro,
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.3, ease: 'power4.out' }
        );
      },
    });
  };

  useEffect(() => {
    gsap.set('.showNewPicIntro', { opacity: 0, scaleX: 0, display: 'none' });
  }, []);

  return (
    <div className='text-white h-screen bg-white'>
      <div
        className='profileImage w-full h-full flex justify-center md:p-5 relative'
        style={{ zIndex: '50' }}
        onClick={hideProfilePic}
      >
        <div
          title="Thanks!"
          className={`hover:cursor-pointer w-56 h-72 md:w-[340px] border-2 border-textbox shadow-sm ${
            hideProfile ? 'hideProfilePicOutro' : 'showNewPicIntro'
          } md:h-[450px] object-cover rounded-full`}
        >
          <Image
            src={avatarLaptopBig}
            alt="Nvm its fine"
            className='w-56 h-72 md:w-[340px] md:h-[450px] object-cover rounded-full'
          />
        </div>
        <div
          title="Click Me"
          className={`w-56 h-72 hover:cursor-pointer md:w-[340px] md:h-[450px] bg-white object-cover rounded-full ${
            hideProfile ? 'showNewPicIntro' : 'hideProfilePicOutro'
          }`}
        >
          <Image
            src={rubeanProflie}
            alt="Please dont Look"
            className='w-56 h-72 md:w-[340px] md:h-[450px] object-cover rounded-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Test;