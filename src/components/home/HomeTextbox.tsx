// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
import Nameplate from './Nameplate';
//import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaCircleArrowUp, FaCircleNotch, FaPlay } from 'react-icons/fa6';
import { chatDialog } from '@/constant/chatDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

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
    console.log("Before Typing:", characterTyped);
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
    console.log("After Typing:", characterTyped);
    const dialogLength = chatDialog.length > 0 ? chatDialog[0].dialog.length : 0;
    if(dialogLength === characterTyped){
      setFinishTalk(true)
    }
  }, [finishTalk]);

  return (
    <div className='h-50% shadow-md'>
      <div>
        <Nameplate name="WEB DEVELOPER" />
      </div>
      <div className='z-10 '>
        <div className='relative p-3 min-w-[320px] max-w-[400px] md:min-w-[450px] bg-textbox mt-4 pt-5 md:mt-5 md:pt-6'>
          <p className='text-md md:text-2xl '>
            {splitText(chatDialog[0].dialog)}
          </p>

          <div className='w-full flex justify-end play-icon opacity-0'>
            {finishTalk?(
              <FaPlay className='text-white fa-beat fadeInDown'/>
            ):(
              <FaCircleNotch className='text-white spin fadeInDown' />
            )
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeTextbox;
