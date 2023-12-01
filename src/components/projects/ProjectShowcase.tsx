import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { circle, iconSirmata, iconYoutube, logoDarkMode } from '@/assets';
import SkillName from './ProjectName';
import gsap from 'gsap';

interface ProjectData {
    id: number;
    projectName: string;
    image: StaticImageData;
    link: string;
  }
  
  interface ProjectShowcaseProps {
    selectedProjectData: ProjectData;
  }

  
  function ProjectShowcase({ selectedProjectData }: ProjectShowcaseProps) {

    const hoverProjectEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const projectOverlayHover = event.currentTarget.querySelector('.projectOverlayHover');
        gsap.set(projectOverlayHover, { opacity: 0});
        gsap.to(projectOverlayHover, {
          opacity: .50,
          duration: 0.4,
          x: 0,
          scaleX: 1,
          ease: 'power5.out'
    
        });

        const projectYoutubeHover = event.currentTarget.querySelector('.projectYoutubeHover');
        gsap.set(projectYoutubeHover, { opacity: 0, y:50});
        gsap.to(projectYoutubeHover, {
          opacity: 1,
          duration: 0.4,
          y: 0,
          ease: 'power3.out',
            delay:.4
        });

        
      };
    
      const hoverProjectLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const projectOverlayHover = event.currentTarget.querySelector('.projectOverlayHover');
        gsap.killTweensOf(projectOverlayHover); // Kill ongoing tweens
      
        gsap.to(projectOverlayHover, {
          opacity: 0,
          duration: 0.4,
          scaleX: 0,
          ease: 'power1.out',
        });
      
        const projectYoutubeHover = event.currentTarget.querySelector('.projectYoutubeHover');
        gsap.killTweensOf(projectYoutubeHover); // Kill ongoing tweens
      
        gsap.to(projectYoutubeHover, {
          opacity: 0,
          duration: 0.2,
          y: 50,
          ease: 'power3.out',
        });
      };
      

    return (
        <div className='h-50% md:h-[550px]  relative'>
            <div className='projectShowcaseIdle  relative'  style={{ zIndex: 100 }}>
            <div className='w-full flex justify-center'>
                {selectedProjectData && (
                    <SkillName projectName={selectedProjectData.projectName} />
                )}
            </div>
            <div className='z-10 relative border-8 border-t-0 border-skillMenu  bg-skillMenu  mt-5 md:mt-'>
                {selectedProjectData && (
                    <Image
                        src={selectedProjectData.image}
                        alt={selectedProjectData.projectName}
                        className='md:h-70% w-full max-w-[280px] md:w-full md:max-w-[340px] md:max-h-[500px]  rounded-md shadow-md md:mt-0 projectTransition'
                       
                    />
                )}

                <div className='h-full absolute top-0 left-0 w-full  hover:cursor-pointer'
                    onMouseEnter={hoverProjectEnter}
                    onMouseLeave={hoverProjectLeave}>
 <span className='h-full absolute top-0 left-0 w-full flex items-center justify-center opacity-0 projectYoutubeHover' style={{ zIndex: '100' }}>
                {selectedProjectData.id === 5 ? (
                    <a href={selectedProjectData.link} className='flex justify-center' title={selectedProjectData.link} target="_blank">
                        <Image src={iconSirmata} alt="Sirmata Link" className='w-60%' />
                    </a>
                ) : selectedProjectData.id === 6 ? (
                  <a href={selectedProjectData.link} className='flex justify-center' title={selectedProjectData.link} target="_blank">
                    <Image src={logoDarkMode} alt="I wonder where it could be." className='w-60% projectLogoDarkMode' />
                    </a>
                ) : (
                    <a href={selectedProjectData.link} className=' flex justify-center' title={selectedProjectData.link} target="_blank">
                        <Image src={iconYoutube} alt="Youtube Link" className='w-60%' />
                    </a>
                )}
            </span>

                    <span className='h-full absolute top-0 left-0 w-full bg-white opacity-0 projectOverlayHover'>
                    </span>
                </div>

            </div>                
            </div>


            <div className='absolute bottom-[-20px] md:bottom-[20px] left-0 w-full flex justify-center projectShadowIdle' style={{ zIndex: '5' }}>
                <Image
                    src={circle}
                    alt='Avatar Spotlight'
                    style={{ filter: 'var(--color-avatarSpotlight) ' }}
                    className='w-100% h-10 md:h-[50px] md:w-[400px]'
                />
            </div>
        </div>
    );
}

export default ProjectShowcase;
