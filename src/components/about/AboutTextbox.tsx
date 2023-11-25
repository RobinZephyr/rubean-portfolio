// HomeTextbox.tsx
import React, { useEffect } from 'react';
//import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import { chatAbout, chatHome } from '@/constant/chatDialog';
import gsap from 'gsap';
import Nameplate from '../home/Nameplate';

const AboutTextbox: React.FC = () => {
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
        <div className='relative p-3   bg-textbox w-full  shadow-md md:max-w-[600px] pt-5'>
          <div className='text-sm md:text-xl   '>
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
