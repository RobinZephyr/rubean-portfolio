// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
import Nameplate from './Nameplate';
//import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaLocationPin } from 'react-icons/fa6';
import { chatDialog } from '@/constant/chatDialog';
import gsap from 'gsap';

const HomeTextbox: React.FC = () => {
  useEffect(() => {
    AnimationTransition();
  }, []); 

  const splitText = (text: string) => {
    const parts = text.split(/(<br\/?>|\s)/); 
    return parts.map((part, index) => {
      if (part === ' ') {
        return <span key={index} className="letter-chat">&nbsp;</span>; 
      } else if (part.toLowerCase() === '<br/>') {
        return <br key={index} />; 
      } else {
        return (
          <span key={index} className={`opacity-0 letter-chat`}>
            {part}
          </span>
        );
      }
    });
  };

  const [characterTyped, setCharactersTyped]=useState(0)
  const [finishTalk,setFinishTalk] = useState(false);
  useEffect(() => {
    const dialogLength = chatDialog.length > 0 ? chatDialog[0].dialog.length : 0;
    let timeout: NodeJS.Timeout;
    for (let i = 0; i < dialogLength; i++) {
      timeout = setTimeout(() => {
        setCharactersTyped(i + 1);
        if (i + 1 === dialogLength) {
          setFinishTalk(true);
        }
      }, i * 75);
    }
    return () => clearTimeout(timeout);
  }, [chatDialog]); 

  useEffect(() => {
    const dialogLength = chatDialog.length > 0 ? chatDialog[0].dialog.length : 0;
  
    if (dialogLength === characterTyped) {
      const nextDialogindicator = document.querySelector('.nextDialogindicator');
  
      // Check if nextDialogindicator exists before animating
      if (nextDialogindicator) {
        setFinishTalk(true);
  
        gsap.to([nextDialogindicator], {
          y: -4,
          ease: 'power4.inout',
          yoyo: true,
          repeat: -1,
        });
      }
    }
  }, [characterTyped, chatDialog]); // Include characterTyped and chatDialog in the dependency array
  

  return (
    <div className='h-50% shadow-md w-full   '>
      <div>
        <Nameplate name="WEB DEVELOPER" />
      </div>
      <div className='z-10 '>
        <div className='relative p-3   bg-textbox w-full mt-4 pt-5 md:mt-5 md:pt-6'>
          <p className='text-md md:text-xl   '>
            {chatDialog[0].dialog}
          </p>

          <div className='  w-full flex justify-end play-icon opacity-0 absolute '>
            {finishTalk?(
              <FaLocationPin className='text-text text-2xl p-0 fadeInDown absolute -top-4 right-3 nextDialogindicator'/>
            ):(
              ""
              // <FaCircleNotch className='text-white spin fadeInDown' />
            )
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeTextbox;
