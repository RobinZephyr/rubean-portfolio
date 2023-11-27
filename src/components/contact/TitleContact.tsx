import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationTransition } from "@/constant/animationTransition";

gsap.registerPlugin(ScrollTrigger);

export default function TitleContact() {
  const titleRef = useRef(null);

  useEffect(() => {
    AnimationTransition();
  }, []);

  const text = "Contact Me";

  useEffect(() => {
    gsap.set('.titleScrollContact', { y: 50 });
    gsap.to('.titleScrollContact', {
      scrollTrigger: {
        trigger: '.titleScrollContact', // Updated trigger to '.titleScrollContact'
        start: 'top 80%',
        end: 'bottom 400px',
        scrub: 1,
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    gsap.set('.leftTitleContact', { x: -100 });
    gsap.to('.leftTitleContact', {
      scrollTrigger: {
        trigger: '.titleScrollContact', // Updated trigger to '.titleScrollContact'
         start: 'top 80%',
        end: 'bottom 400px',
        scrub: 1,
      },
      x: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });

    const rightTitleContact = document.querySelectorAll('.rightTitleContact');
    rightTitleContact.forEach(element => {
      element.classList.remove('hidden');
    });
    gsap.set('.rightTitleContact', { x: 100 });
    gsap.to('.rightTitleContact', {
      scrollTrigger: {
        trigger: '.titleScrollContact', // Updated trigger to '.titleScrollContact'
         start: 'top 80%',
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
      <div className="leftTitleContact  h-3 md:h-5 w-full md:w-15% bg-titleBorder" />

      <div
        className="titleScrollContact text-center text-text  border-red-900 mx-2 text-2xl sm:text-3xl md:text-5xl whitespace-nowrap"
        ref={titleRef}>
        {text}
      </div>

      <div className="rightTitleContact  h-3 md:h-5 w-full bg-titleBorder " />
    </div>
  );
}
