// Nameplate.tsx
import React from 'react';

interface SkillNameProps {
    skillName: string;
}

const SkillName: React.FC<SkillNameProps> = ({ skillName }) => {
  return (
    <div className='flex items-center absolute z-20 '>

<div className=' md:hidden
                      border-t-[16px] border-t-transparent
                      border-r-[20px] border-namePlate
                      border-b-[16px] border-b-transparent'/>

      <div className=' border-4 border-namePlate bg-namePlate h-8 md:h-10 flex w-fit px-3 items-center'>
        <p className='text-white text-lg md:text-2xl'>{skillName}</p>
      </div>

      <div className=' md:hidden
                      border-t-[16px] border-t-transparent
                      border-l-[20px] border-namePlate
                      border-b-[16px] border-b-transparent'/>

  
    </div>
  );
}

export default SkillName;
