import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationTransition } from "@/constant/animationTransition";

gsap.registerPlugin(ScrollTrigger);

export default function TitleProject() {
  const titleRef = useRef(null);

  useEffect(() => {
    AnimationTransition();
  }, []);

  const text = "My Works";

  useEffect(() => {
    gsap.set('.titleScrollProject', { y: 50 });
    gsap.to('.titleScrollProject', {
      scrollTrigger: {
        trigger: '.titleScrollProject', // Updated trigger to '.titleScrollProject'
        start: 'top 80%',
        end: 'bottom 400px',
        scrub: 1,
        once:true
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    gsap.set('.leftTitleProject', { x: -100 });
    gsap.to('.leftTitleProject', {
      scrollTrigger: {
        trigger: '.titleScrollProject', // Updated trigger to '.titleScrollProject'
         start: 'top 80%',
        end: 'bottom 400px',
        scrub: 1,
        once:true
      },
      x: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    const rightTitleProject = document.querySelectorAll('.rightTitleProject');
    rightTitleProject.forEach(element => {
      element.classList.remove('hidden');
    });
    gsap.set('.rightTitleProject', { x: 100 });
    gsap.to('.rightTitleProject', {
      scrollTrigger: {
        trigger: '.titleScrollProject', // Updated trigger to '.titleScrollProject'
         start: 'top 80%',
        end: 'bottom 400px',
        scrub: 1,
        once:true
      },
      x: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
      onComplete:()=>{
      }
    });
  }, []);
 
  return (
    <div className="w-full flex items-center ">
      <div className="leftTitleProject opacity-0 h-3 md:h-5 w-full md:w-15% bg-titleBorder" />

      <div
        className="titleScrollProject text-center text-text opacity-0 border-red-900 mx-2 text-2xl sm:text-3xl md:text-5xl whitespace-nowrap"
        ref={titleRef}>
        {text}
      </div>

      <div className="rightTitleProject opacity-0 h-3 md:h-5 w-full bg-titleBorder hidden" />
    </div>
  );
}
