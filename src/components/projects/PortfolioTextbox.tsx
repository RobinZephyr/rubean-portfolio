// HomeTextbox.tsx
import React, { useEffect } from 'react';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import Nameplate from '../home/Nameplate';
import { StaticImageData } from 'next/image';
import gsap from 'gsap/all';
interface PortfolioTextboxProps {
  data: {
    id: number;
    projectName: string;
    link: string;
    image: StaticImageData;
    icon: StaticImageData;
    parts: { text: string; styles: {} }[];
  } | undefined;
}

const PortfolioTextbox: React.FC<PortfolioTextboxProps> = ({ data }) => {
  useEffect(() => {
    AnimationTransition();
    const nextDialogindicator3 = document.querySelector('.nextDialogindicatorProject');
    if (nextDialogindicator3) {
      gsap.to([nextDialogindicator3], {
        y: -4,
        ease: 'power4.inout',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []); 

  return (
    <div className='w-full h-50% flex justify-center'>
      <div>
        <Nameplate name="Rubean Rakeru" />
      </div>
      <div className='z-10 pt-5  '>
        <div className='relative p-3   bg-textbox w-full  shadow-md  pt-7 '>
          <div className='text-sm md:text-lg text-text  '>
            <div style={{ whiteSpace: 'pre-line' }} className='projectTextboxText'>
              {data && data.parts.map((part, index) => (
                <div key={index} style={part.styles}>
                  {part.text}
                </div>
              ))}
            </div>
          </div>

          <div className='w-full flex justify-end play-icon opacity-0 absolute h-[20px]'>
            <FaLocationPin className='text-text text-2xl p-0 fadeInDown absolute -top-4 right-3 nextDialogindicatorProject' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTextbox;
