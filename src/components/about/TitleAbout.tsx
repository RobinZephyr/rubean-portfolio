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

  gsap.set('.titleScrollAbout', { y: -50 });
  gsap.to('.titleScrollAbout', {
    scrollTrigger: {
      trigger: '.titleScrollAbout',
      start: 'top center',
      end: 'top 200',
      scrub: 2,
      markers: true
    },
    y: 0,
    duration: 2,
    ease: 'power1.out',
    opacity: 1,
    delay: 3,
  });

  gsap.set('.leftTitle', { x: '-200' });
  gsap.to('.leftTitle', {
    scrollTrigger: {
      trigger: '.titleScrollAbout',
      start: 'top center',
      end: 'top 200',
      scrub: 2,
    },
    x: 0,
    duration: 2,
    ease: 'expo.out',
    opacity: 1,
    delay: 3,
    scaleX: 1,
  });

  gsap.set('.rightTitle', { x: '200' });

  gsap.to('.rightTitle', {
    scrollTrigger: {
      trigger: '.titleScrollAbout',
      start: 'top center',
      end: 'top 200',
      scrub: 2,
    },
    x: 0,
    duration: 2,
    ease: 'expo.out',
    opacity: 1,
    delay: 3,
    scaleX: 1,
    onComplete: () => {
      const rightTitleElement = document.querySelector('.rightTitle');
      if (rightTitleElement) {
        rightTitleElement.classList.remove('hidden');
      }
    },
  });

  return (
    <div className="w-full flex items-center justify-between">
      <div className="leftTitle opacity-0 h-3 sm:h-5 md:h-7 w-20% min-w-[16px] bg-titleBorder" />

      <div
        className="items-center text-center px-2 flex text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold titleScrollAbout opacity-0"
        ref={titleRef}
      >
        {text}
      </div>

      <div className="rightTitle hidden opacity-0 h-3 sm:h-5 md:h-7 w-20% sm:w-full bg-titleBorder" />
    </div>
  );
}
