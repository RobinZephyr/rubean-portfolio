import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { avatarLaptopType, avatarSnapWink, circle } from '@/assets';
import { AnimationTransition } from '@/constant/animationTransition';
import '../../assets/style/elements.css';
import '../../assets/style/animation.css';

const AvatarHomeAnimation = () => {
  

  useEffect(() => {
   AnimationTransition()
  }, []);
  
  return (
    <div className="w-full h-43%  flex justify-center items-end relative ">
      <div className="relative z-10">
      <Image
        src={avatarSnapWink}
        className="object-cover AvatarSnap opacity-0  w-52 h-52 md:w-64 md:h-64 "
        alt="AvatarSnap Image"
        priority
      />
      <Image
        src={avatarLaptopType}
        className="object-cover AvatarType hidden w-52 h-52 md:w-64 md:h-64 "
        alt="AvatarType Image"
        priority
      />
      </div>
      <div className={`-top-10 md:-top-20    absolute`}>
        <Image
          src={circle}
          className="object-cover AvatarCircle opacity-0 w-52 h-52 md:h-[250px] md:w-[250px]   "
          style={{ filter: 'var(--color-avatarSpotlight)' }}
          alt="Circle Image"
          priority
        />
      </div>
    </div>
  );
};

export default AvatarHomeAnimation;


