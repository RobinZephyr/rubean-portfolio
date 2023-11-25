import { skills } from '@/constant/skills';
import React, { useEffect } from 'react';
import SkillName from './SkillName';
import Image from 'next/image';
import { AnimationTransition } from '@/constant/animationTransition';
import gsap from 'gsap';

function AboutSkillsmenu() {


  const handleHoverEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const bgSkillSelect = event.currentTarget.querySelector('.bgSkillSelect');
    gsap.set(bgSkillSelect, { opacity: 0, scaleX: -1 });
    gsap.to(bgSkillSelect, {
      opacity: 1,
      duration: 0.4,
      x: 0,
      scaleX: 1,
      ease: 'power5.out'

    });
  };

  const handleHoverLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const bgSkillSelect = event.currentTarget.querySelector('.bgSkillSelect');
    gsap.to(bgSkillSelect, {
      opacity: 0,
      duration: 0.4,
      scaleX: 0,
      ease: 'power1.out',
      onComplete: () => {
        gsap.set(bgSkillSelect, { clearProps: 'all' }); // Clear scaleX property
      }
    });
  };


  useEffect(() => {
    AnimationTransition();
  }, []);

  return (
    <div className='w-full md:max-w-[600px] ' style={{zIndex:'100'}}>
      <div className='justify-center flex'>
        <SkillName skillName="SKILLS" />
      </div>

      <div className='carousel bg-skillMenu w-full  mt-5 pt-6 rounded'>
        <div className='overflow-none overflow-x-auto scrollbar px-2 inner-carousel bg-skillMenu flex gap-4 py-1'>
          {skills.map((skill) => (
            <div key={skill.id} className='min-w-[5rem] relative fadeAnimationSkills shadow-md'>

              {/* Hover Show */}
              <div
                className=' h-full absolute top-0 left-0 w-full h-full'
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}>
                <span className='absolute flex bgSkillSelect opacity-0   w-full h-full text-white text-xs'>
                  <div className='w-full h-full flex items-center justify-center border-4 border-content '>
                    {skill.skill}
                  
                  </div>
                  <div className=' skillButton absolute  w-full h-full bg-opacity-70 hover:bg:black-900'/>
                </span>
              </div>

              {/* Container for skill image */}
              <div className='px-2 w-full h-full py-1  item bg-textbox shadow-sm'>
                <Image src={skill.image} alt={skill.skill} className='' title={skill.skill} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSkillsmenu;
