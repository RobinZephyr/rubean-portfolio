import { skills } from '@/constant/skills';
import React from 'react';

function AboutSkillsmenu() {
  const visibleSkills = skills.slice(0, 5); // Get the first 5 skills

  return (
    <div className='bg-skillMenu w-full flex overflow-x-none justify-between flex p-3 '>
      {visibleSkills.map((skill) => (
        <div key={skill.id} className='text-text bg-black  items-center flex'>
            <div className='h-[80px] w-[80px]'>
            {skill.skill}
            </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSkillsmenu;
