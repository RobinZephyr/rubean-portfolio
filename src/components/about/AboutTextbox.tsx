// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
//import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import { chatAbout, chatDialog } from '@/constant/chatDialog';
import gsap from 'gsap';
import Nameplate from '../home/Nameplate';

const AboutTextbox: React.FC = () => {
  useEffect(() => {
    AnimationTransition();
    const nextDialogindicator = document.querySelector('.nextDialogindicatorAbout');
  
      gsap.to([nextDialogindicator], {
        y: -4,
        ease: 'power4.inout',
        yoyo: true,
        repeat: -1,
      });
  }, []); 

  
  return (
    <div className='h-50% shadow-md w-full border-2 border-blue-400'>
      <div>
        <Nameplate name="Rubean Rakeru" />
      </div>
      <div className='z-10 '>
        <div className='relative p-3  bg-textbox w-full md:max-w-[480px] mt-4 pt-5 md:mt-5 md:pt-6'>
          <div className='text-md md:text-xl   '>
            <div style={{ whiteSpace: 'pre-line' }}>
              {chatAbout[0].parts.map((part, index) => (
                <span key={index} style={part.styles}>
                  {part.text}
                </span>
              ))}
            </div>
          </div>

          <div className='w-full flex justify-end play-icon opacity-0 absolute '>
              <FaLocationPin className='text-text text-2xl p-0 fadeInDown absolute -top-4 right-3 nextDialogindicatorAbout'/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutTextbox;
