// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import { chatHome } from '@/constant/chatDialog';
import gsap from 'gsap';
import Nameplate from '../home/Nameplate';



const HomeTextbox: React.FC = () => {
  useEffect(() => {
    AnimationTransition();
    const nextDialogindicator = document.querySelector('.nextDialogindicatorHome');
    gsap.to([nextDialogindicator], {
      y: -4,
      ease: 'power4.inout',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const [currentDialog, setCurrentDialog] = useState(0);

  const advanceDialog = () => {
    setCurrentDialog((prev) => (prev + 1) % chatHome.length);

    gsap.set('.homeTextboxText', {  opacity:.0 });
    gsap.to('.homeTextboxText', {
    duration: .5,
    ease: 'power1.inOut',
    opacity: 1,
    });
  };

  interface ChatPart {
    text: string;
    styles: {
      whiteSpace: string;
      color?: string; // Add color as an optional property
    };
    link?: string; // Make link property optional
  }
  

  const scrollToSection = () => {
    const currentDialogData = chatHome[currentDialog];
    const link = (currentDialogData.link || (currentDialogData.parts[0] as ChatPart | undefined)?.link) as string | undefined;
    if (link) {
      let headerHeight = 73;
    if (window.innerWidth < 768) {
      headerHeight = 90; // Adjust this value as needed for your design
    }
    if (link === 'home') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const scrollPosition = homeSection.offsetTop - headerHeight;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    } else {
      const section = document.getElementById(link);
      if (section) {
        let scrollPosition;
        if (link === "contact") {
          scrollPosition = section.offsetTop - 0;
        } else {
          scrollPosition = section.offsetTop - headerHeight;
        }
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    }
    }
  };
  
  

  return (
    <div className='h-50% w-full '>
      <div>
        <Nameplate name="Rubean Rakeru" />
      </div>
      <div className='z-10 pt-5 '>
        <div className='relative  p-3  fade bg-textbox  items-center     pt-7'
        >
          <div className='text-md md:text-lg h-full flex items-center   '>
          <div style={{ whiteSpace: 'pre-line' }} className='homeTextboxText'>
            {chatHome[currentDialog].parts.map((part, index) => (
              <span
                key={index}
                style={{
                  whiteSpace: part.styles.whiteSpace as React.CSSProperties['whiteSpace'],
                  color: (part.styles && 'color' in part.styles ? part.styles.color : undefined) as React.CSSProperties['color'],
                }}
                
                className={[
                  'ABOUT',
                  'PROJECT',
                  'CONTACT'
                ].includes(part.text)
                  ? ' hover:text-blue-500 transition text-blue-300  ease-in-out transform duration-200 opacity-100 hover:-transform-y-5 hover:cursor-pointer'
                  : ''
                }
                onClick={
                  ['ABOUT', 'PROJECT', 'CONTACT'].includes(part.text)
                    ? scrollToSection
                    : undefined
                }
              >
                {part.text + ' '}
              </span>
            ))}
          </div>
          </div>
          <div className='w-full flex justify-end play-icon opacity-0   h-[20px] '  onClick={advanceDialog}>
            <FaLocationPin className='text-text md:text-2xl p-0 fadeInDown absolute  transform duration-200 opacity-100 hover:text-gray-400 hover:cursor-pointer  right-0 bottom-[-10px]  hover:cursor-pointer nextDialogindicatorHome' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTextbox;
