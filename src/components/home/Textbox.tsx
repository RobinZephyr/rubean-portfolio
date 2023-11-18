// Nameplate.tsx
import React from 'react';
import { FaPlay } from 'react-icons/fa6';

interface TextboxProps {
  dialog: string;
}

const Textbox: React.FC<TextboxProps> = ({ dialog }) => {
  return (
    <div className='relative p-3  min-w-[320px] max-w-[400px] md:min-w-[500px] md:max-w-[540px] bg-textbox mt-4 pt-5 md:mt-5  md:pt-6'>
    <p className='text-md md:text-lg'>
        {dialog}
    </p>
    <div className='w-full flex justify-end'>
            <FaPlay className='text-white'/>
        </div>
  </div>
  );
}

export default Textbox;
