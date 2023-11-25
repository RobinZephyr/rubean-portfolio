import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationTransition } from "@/constant/animationTransition";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTitle() {
  const titleRef = useRef(null);

  useEffect(() => {
    AnimationTransition();
  }, []);

  const text = "ABOUT ME";

  useEffect(() => {
    gsap.set('.titleScrollAbout', { y: 50 });
    gsap.to('.titleScrollAbout', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 400px',
        scrub: 1,
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    gsap.set('.leftTitle', { x: -100 });
    gsap.to('.leftTitle', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 400px',
        scrub: 1,
      },
      x: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    const rightTitle = document.querySelectorAll('.rightTitle');
    rightTitle.forEach(element => {
      element.classList.remove('hidden');
    });
    gsap.set('.rightTitle', { x: 100 });
    gsap.to('.rightTitle', {
      scrollTrigger: {
        trigger: '.titleScrollAbout', // Updated trigger to '.titleScrollAbout'
        start: 'top 60%',
        end: 'bottom 400px',
        scrub: 1,
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
      <div className="leftTitle opacity-0 h-3 md:h-5 w-full md:w-15% bg-titleBorder" />

      <div
        className="titleScrollAbout text-center opacity-0 border-red-900 mx-2 text-2xl sm:text-3xl md:text-5xl whitespace-nowrap"
        ref={titleRef}>
        {text}
      </div>

      <div className="rightTitle opacity-0 h-3 md:h-5 w-full bg-titleBorder hidden" />
    </div>
  );
}
