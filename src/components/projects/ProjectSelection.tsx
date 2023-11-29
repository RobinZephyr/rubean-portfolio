import React, { useEffect, useState } from 'react';
import ProjectName from './ProjectName';
import { projects } from '@/constant/projects';
import Image from 'next/image';
import { iconSelector } from '@/assets';
import gsap from 'gsap';
import { AnimationTransition } from '@/constant/animationTransition';

interface ProjectSelectionProps {
    onProjectSelect: (projectId: number) => void;
  }

function ProjectSelection({ onProjectSelect }: ProjectSelectionProps) {
    const [selectedProject, setSelectedProject] = useState(1);

    const onClickChangeProject = (projectId: number) => {
        setSelectedProject(projectId);

        const selectorIconGsap = document.querySelector('.selectorIconGsap');
        gsap.set(selectorIconGsap, { scale: 1 });
        gsap.to(selectorIconGsap, {
            scale: .5,
            ease: 'power1.inOut',
            duration: 5,
            onComplete: () => {
                gsap.to(selectorIconGsap, { scale: 1, duration: 0.5 });
            },
        });
        onProjectSelect (projectId);
        gsap.set('.projectTransition', {  scaleX:0, opacity:.5 });
        gsap.to('.projectTransition', {
        duration: .5,
        ease: 'power4.inOut',
        opacity: 1,
        scaleX:1,
        });

        gsap.set('.projectTextboxText', {  opacity:.0 });
        gsap.to('.projectTextboxText', {
        duration: .5,
        ease: 'power1.inOut',
        opacity: 1,
        });
        
    };

    useEffect(() => {
        gsap.set('.selectorIconGsap', { scale: 1.02 });
        gsap.to('.selectorIconGsap', {
            opacity: 1,
            yoyo: true,
            ease: 'power1.inOut',
            repeat: -1,
            scale: 1.04,
            duration: 0.5,
        });
    }, [selectedProject]); // Add selectedProject to the dependency array

    useEffect(() => {
        AnimationTransition();
    }, []);

    const handleHoverEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const bgHover = event.currentTarget.querySelector('.bgHover');
        gsap.set(bgHover, { opacity: 0, transformOrigin: 'bottom' });

        gsap.to(bgHover, {
            opacity: 0.1,
            duration: 0.4,
            ease: 'power5.out',
        });
    };

    const handleHoverLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const bgHover = event.currentTarget.querySelector('.bgHover');
        gsap.to(bgHover, {
            opacity: 0,
            duration: 0.4,
            ease: 'power1.out',
            onComplete: () => {
                gsap.set(bgHover, { clearProps: 'all' });
            },
        });
    };

  

    return (
        <div className='h-50% w-full flex justify-center '>
            <div className='flex justify-center absolute'>
                <ProjectName projectName='Projects' />
            </div>
            <div className='mt-5 pt-6 pb-2  gap-5 max-w-[300px] md:max-w-[450px] bg-skillMenu flex flex-wrap relative whitespace-pre justify-center'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`w-[4.7rem] md:w-[5rem] lg:w-[5.5rem]  bg-textbox p-3  relative cursor-pointer  `}
                        onClick={() => onClickChangeProject(project.id)}
                        onMouseEnter={handleHoverEnter}
                        onMouseLeave={handleHoverLeave}
                       >
                        <div className='h-full absolute top-0 left-0 w-full  '>
                            {project.id === selectedProject ? (
                                <Image src={iconSelector} alt='Select' className='selectorIconGsap'
                                       style={{ filter: 'var(--color-projectSelectorFilter)' }} />
                            ) : (
                                ''
                            )}
                            <span className='h-full absolute top-0 left-0 w-full  bg-white opacity-0 bgHover'/>
                        </div>
                        <div className='w-full h-full'>
                            <Image src={project.icon} alt={project.projectName} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSelection;
