// Nameplate.tsx
import React from 'react';
import { FaCrow } from 'react-icons/fa6';

interface ContactNamplate {
  name: string;
}

const ContactNamplate: React.FC<ContactNamplate> = ({ name }) => {
  return (
    <div className='flex items-center absolute z-20'>
      <div className=' border-4 border-namePlate bg-namePlate h-8 md:h-10 flex w-fit px-3 items-center '>
        <div className='whitespace-nowrap text-white text-md md:text-2xl flex items-center space-x-3 '> 
          <span>
            <FaCrow/>   
          </span>
          <span>
            {name}
          </span>
        </div>
      </div>

      <div className=' md:hidden
                      border-t-[16px] border-t-transparent
                      border-l-[20px] border-namePlate
                      border-b-[16px] border-b-transparent'/>

        <div className=' md:block hidden
                border-t-[20px] border-t-transparent
                border-l-[22px] border-namePlate
                border-b-[20px] border-b-transparent'/>
    </div>
  );
}

export default ContactNamplate;
