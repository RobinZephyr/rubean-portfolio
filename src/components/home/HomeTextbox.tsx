// HomeTextbox.tsx
import React, { useEffect, useState } from 'react';
import Nameplate from './Nameplate';
import Textbox from './Textbox';
import { AnimationTransition } from '@/constant/animationTransition';
import { FaCircleArrowUp, FaCircleNotch, FaPlay } from 'react-icons/fa6';
import { chatDialog } from '@/constant/chatDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const HomeTextbox: React.FC = () => {
  useEffect(() => {
    AnimationTransition();
  }, []); // Empty dependency array to run the effect only once

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className={`opacity-0 letter-chat ${char === ' ' ? '' : ''}`}>
        {char === '' ? '\u00A0' : char}
      </span>
    ));
  };

  const [characterTyped, setCharactersTyped]=useState(0)
  const [finishTalk,setFinishTalk] = useState(false);
  useEffect(() => {
    const dialogLength = chatDialog.length > 0 ? chatDialog[0].dialog.length : 0;
    console.log("Before Typing:", characterTyped);

    let timeout: NodeJS.Timeout;

    // Use setTimeout to simulate the typewriter effect
    for (let i = 0; i < dialogLength; i++) {
      timeout = setTimeout(() => {
        setCharactersTyped(i + 1);

        // If all characters are typed, set finishTalk to true
        if (i + 1 === dialogLength) {
          setFinishTalk(true);
        }
      }, i * 75); // You can adjust the timeout duration
    }

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);

  }, [chatDialog]); 

  useEffect(() => {
    console.log("After Typing:", characterTyped);
    const dialogLength = chatDialog.length > 0 ? chatDialog[0].dialog.length : 0;
    if(dialogLength === characterTyped){
      setFinishTalk(true)
    }
  }, [finishTalk]); // Use finishTalk as a dependency for the second useEffect

  return (
    <div className='h-50%'>
      <div>
        <Nameplate name="WEB DEVELOPER" />
      </div>
      <div className='z-10'>
        <div className='relative p-3 min-w-[320px] max-w-[400px] md:min-w-[500px] md:max-w-[540px] bg-textbox mt-4 pt-5 md:mt-5 md:pt-6'>
          <p className='text-md md:text-lg '>
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
