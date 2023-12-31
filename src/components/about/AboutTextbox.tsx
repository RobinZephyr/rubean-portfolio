// HomeTextbox.tsx
import React, { CSSProperties, useEffect, useState } from 'react';
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
        duration: 1,
        stagger: 0.1, 
      });
  }, []); 



  return (
    <div className='w-full flex justify-center'>
      <div>
        <Nameplate name="Rubean Rakeru" />
      </div>
      <div className='z-10 pt-5 '>
        <div className='relative p-3   bg-textbox  shadow-md pt-5 min-w-[300px] md:min-w-[400px]'>
          <div className='text-sm md:text-md xlg:text-lg   aboutTextboxIntro '>
          <div style={{ whiteSpace: 'pre-line' }}>
          {chatAbout[aboutDialog] && chatAbout[aboutDialog].parts
            ? chatAbout[aboutDialog].parts.map((part, index) => (
                <span key={index} style={part.styles as CSSProperties}>
                  {part.text}
                </span>
              ))
            : null}
        </div>
          </div>

          <div className='w-full flex justify-end play-icon opacity-0  h-[20px] glow-effect ' onClick={increaseAboutDialog}>
              <FaLocationPin className='text-text md:text-2xl p-0 fadeInDown absolute  right-0 bottom-[-10px]  hover:cursor-pointer nextDialogindicatorAbout   transform duration-200 opacity-100 hover:text-pink-200 '/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutTextbox;
