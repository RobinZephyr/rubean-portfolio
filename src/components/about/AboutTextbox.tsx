// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
//import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import { chatAbout, chatHome } from '@/constant/chatDialog';
import gsap from 'gsap';
import Nameplate from '../home/Nameplate';

const AboutTextbox: React.FC<{ aboutDialog: number; increaseAboutDialog: () => void }> = ({ aboutDialog, increaseAboutDialog }) => {
  useEffect(() => {
    AnimationTransition();
    const nextDialogindicator2 = document.querySelector('.nextDialogindicatorAbout');
      gsap.to([nextDialogindicator2], {
        y: -4,
        ease: 'power4.inout',
        yoyo: true,
        repeat: -1,
      });
  }, []); 



  return (
    <div className='h-50% w-full flex justify-center'>
      <div>
        <Nameplate name="Rubean Rakeru" />
      </div>
      <div className='z-10 pt-5 '>
        <div className='relative p-3   bg-textbox w-100%   xmd:w-[400px] md:w-auto md:h-auto shadow-md pt-5'>
          <div className='text-sm md:text-lg aboutTextboxIntro '>
          <div style={{ whiteSpace: 'pre-line' }}>
            {chatAbout[aboutDialog] && chatAbout[aboutDialog].parts
              ? chatAbout[aboutDialog].parts.map((part, index) => (
                  <span key={index} style={part.styles}>
                    {part.text}
                  </span>
                ))
              : null}
          </div>
          </div>

          <div className='w-full flex justify-end play-icon opacity-0  h-[20px]  ' onClick={increaseAboutDialog}>
              <FaLocationPin className='text-text md:text-2xl p-0 fadeInDown absolute  right-0 bottom-[-10px]  hover:cursor-pointer nextDialogindicatorAbout'/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutTextbox;
