// Nameplate.tsx
import React from 'react';

interface SkillNameProps {
    skillName: string;
}

const SkillName: React.FC<SkillNameProps> = ({ skillName }) => {
  return (
    <div className='flex items-center absolute z-20 '>

<div className=' 
                      border-t-[20px] border-t-transparent
                      border-r-[20px] border-namePlate
                      border-b-[20px] border-b-transparent'/>

      <div className=' border-4 border-namePlate bg-namePlate h-10 flex w-fit px-3 items-center'>
        <p className='text-white text-2xl md:text-3xl font-pixeBoy'>{skillName}</p>
      </div>

      <div className=' 
                      border-t-[20px] border-t-transparent
                      border-l-[20px] border-namePlate
                      border-b-[20px] border-b-transparent'/>

  
    </div>
  );
}

export default SkillName;
