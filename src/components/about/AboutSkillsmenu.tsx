import { skills } from '@/constant/skills';
import React, { useEffect } from 'react';
import SkillName from './SkillName';
import Image from 'next/image';
import { AnimationTransition } from '@/constant/animationTransition';
import gsap from 'gsap';
import Marquee from 'react-fast-marquee'
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
    <div className='w-full xmd:w-[400px] md:w-full md:h-auto   ' style={{zIndex:'100'}}>
      <div className='justify-center flex'>
        <SkillName skillName="SKILLS" />
      </div>

      <Marquee speed={60} pauseOnHover={true} className='carousel bg-skillMenu w-full   mt-5 pt-6 rounded'>
      {/* overflow-none overflow-x-auto scrollbar */}
        <div className=' px-2 inner-carousel bg-skillMenu flex gap-4 py-1'>
          {skills.map((skill) => (
            <div key={skill.id} className='min-w-[5rem] relative fadeAnimationSkills shadow-md'>

              {/* Hover Show */}
              <div
                className=' h-full absolute top-0 left-0 w-full'
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}>
                <span className='absolute flex bgSkillSelect opacity-0   w-full h-full text-white text-xs'>
                  <div className='w-full h-full flex  items-center justify-center border-4  border-white rounded-sm '>
                    <span className='m-1'>
                    {skill.skill}
                    </span>
                  </div>
                  <div className=' skillButton absolute  w-full h-full bg-opacity-70 hover:bg:black-900'/>
                </span>
              </div>

              {/* Container for skill image */}
              <div className='px-2 w-[5rem] h-[6rem] py-1  item bg-textbox shadow-sm'>
                <Image src={skill.image} alt={skill.skill} className='' title={skill.skill} />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default AboutSkillsmenu;
