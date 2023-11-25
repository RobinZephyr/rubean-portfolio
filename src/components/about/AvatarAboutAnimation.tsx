import { avatarTadaUp, circle } from '@/assets'
import React, { useEffect } from 'react'
import Image from 'next/image';
import AboutSkillsmenu from './AboutSkillsmenu';
import gsap from 'gsap';
function AvatarAboutAnimation() {

  useEffect(() => {
    gsap.set('.aboutSkills',{y:200,opacity:0})
    gsap.to('.aboutSkills', {
      scrollTrigger: {
        trigger: '.aboutSkills  ', // Updated trigger to '.titleScrollAbout'
        start: 'top center',
        end: 'top 300px',
        scrub: 2,
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: 3.5,
    });

    gsap.set('.aboutAvatarIntro',{y:-100,opacity:0})
    gsap.to('.aboutAvatarIntro', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top center',
        end: 'top 200px',
        scrub: 2,
      },
      y: 0,
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      delay: 3,
    });



  }, []);  // Removed extra closing parenthesis here
  
  return (
    <div className='w-full justify-center h-43% '>
        <div className=' justify-center flex w-full aboutSkills opacity-0  ' style={{zIndex:'300'}}>
            <AboutSkillsmenu/>
        </div>

        <div className=' justify-center relative flex '>
          <div className='relative' style={{zIndex:'300'}}>
            <Image src={avatarTadaUp} alt="Avatar Skills Present" className="  w-44 h-44 md:w-52 md:h-52 z-20 " />
          </div>
        </div>
    </div>
  )
}

export default AvatarAboutAnimation