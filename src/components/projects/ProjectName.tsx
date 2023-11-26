// Nameplate.tsx
import React from 'react';

interface SkillNameProps {
    projectName: string;
}

const SkillName: React.FC<SkillNameProps> = ({ projectName }) => {
  return (
    <div className='flex items-center absolute z-20 '>

<div className=' 
                      border-t-[20px] border-t-transparent
                      border-r-[20px] border-namePlate
                      border-b-[20px] border-b-transparent'/>

      <div className=' border-4 border-namePlate bg-namePlate h-10 flex w-fit  items-center'>
        <p className='text-white whitespace-nowrap text-md md:text-xl lg:text-2xl font-pixeBoy'>{projectName}</p>
      </div>

      <div className=' 
                      border-t-[20px] border-t-transparent
                      border-l-[20px] border-namePlate
                      border-b-[20px] border-b-transparent'/>

  
    </div>
  );
}

export default SkillName;
