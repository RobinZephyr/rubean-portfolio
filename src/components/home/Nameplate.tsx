// Nameplate.tsx
import React from 'react';

interface NameplateProps {
  name: string;
}

const Nameplate: React.FC<NameplateProps> = ({ name }) => {
  return (
    <div className='flex items-center absolute z-20'>
      <div className=' border-4 border-namePlate bg-namePlate h-8 md:h-10 flex w-fit px-3 items-center font-bold'>
        <p className='text-white text-md md:text-2xl'>{name}</p>
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

export default Nameplate;
