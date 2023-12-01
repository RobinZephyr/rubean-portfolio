import React, { useEffect, useState } from 'react';
import TitleProject from './TitleProject';
import ProjectSelection from './ProjectSelection';
import Image from 'next/image';
import { projects } from '@/constant/projects'; // Import the projects array
import { circle } from '@/assets';
import SkillName from './ProjectName';
import ProjectShowcase from './ProjectShowcase';
import PortfolioTextbox from './PortfolioTextbox';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function ProjectPortfolio() {
    const [selectedProject, setSelectedProject] = useState(1);

    const handleProjectSelect = (projectId:number) => {
        setSelectedProject(projectId);
        console.log('Selected Project:', projectId);
    };
    
    const selectedProjectData = projects.find((project) => project.id === selectedProject);

    useEffect(() => {
      gsap.to('.projectShowcaseIdle', {
        y: -20,
        ease: "sine.out",
        yoyo: true,
        repeat: -1,
        duration: 2,
      });

      gsap.to('.projectShadowIdle', {
        scale: 0.8,
        ease: "sine.out",
        yoyo: true,
        repeat: -1,
        duration: 2,
      });
      


      gsap.set('.projectSchowcaseIntro', { opacity:0, y:20});
      gsap.to('.projectSchowcaseIntro', {
        scrollTrigger: {
          trigger: '.titleScrollProject', 
          start: 'top 80%',
          end: 'bottom 400px',
          scrub: 1,
        },
        y: 0,
        duration: 2,
        ease: 'power2.out',
        opacity: 1,
        delay: .3,
      });

      
      gsap.set('.projectTextboxIntro', { opacity:0, y:20});
      gsap.to('.projectTextboxIntro', {
        scrollTrigger: {
          trigger: '.titleScrollProject', 
          start: 'top 80%',
          end: 'bottom 400px',
          scrub: 1,
        },
        y: 0,
        duration: 2,
        ease: 'power2.out',
        opacity: 1,
        delay: .3,
      });


      gsap.set('.projectSelectIntro', { opacity:0, y:20});
      gsap.to('.projectSelectIntro', {
        scrollTrigger: {
          trigger: '.projectTextboxIntro', 
          start: 'top 80%',
          end: 'bottom 400px',
          scrub: 1,
        },
        y: 0,
        duration: 2,
        ease: 'power3.out',
        opacity: 1,
        delay: .6,
      });

      
    }, []);


    
    return (
        <div className='w-full h-100% bg-bkg flex-col justify-center  '>
            <div className=' '>
                <TitleProject />
            </div>
            <div className='p-5  px-3  md:pt-16 md:pb-16  flex justify-center h-full items-center '>
            <div className='md:grid md:grid-cols-2 md:max-w-7xl md:gap-10 flex-col-reverse flex'>
            <div className='flex justify-center mt-5 md:mt-0'>
              <div className='flex-col w-full md:w-100% md:max-w-[500px] min-w-60%'>
                <div className='mt-5 items-center relative md:mt-0 projectTextboxIntro opacity-0'>
                  <PortfolioTextbox data={selectedProjectData} />
                </div>
                <div className='md:block mt-5 projectSelectIntro opacity-0'>
                  <ProjectSelection onProjectSelect={handleProjectSelect} />
                </div>
              </div>
            </div>

            <div className='flex justify-center w-full h-full relative md:mt-0 mt-2 projectSchowcaseIntro opacity-0'>
              {selectedProjectData ? <ProjectShowcase selectedProjectData={selectedProjectData} /> : ''}
            </div>
    </div>
            </div>
        </div>
    );
}

export default ProjectPortfolio;
