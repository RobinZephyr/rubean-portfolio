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

  useEffect(() => {
    gsap.set('.custard', { opacity: 0,x:0 });

    gsap.to('.custard', {
      scrollTrigger: {
        trigger: '.custard',
        scrub: true,
        start: 'top center',
        end: 'top 100px',
      },
      duration: 10,
      ease: 'power4.out',
      rotation: 360,
      opacity: 1,
      x:0
    });
  }, []);

  const text = "ABOUT ME";

  return (
    <div className="w-full flex items-center justify-between">
      <div className="titleBorderLeft opacity-0 h-3 sm:h-5 md:h-7 w-20% min-w-[16px] bg-titleBorder" />

      <div
        className="items-center text-center px-2 sm:w-50% justify-center flex text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold custard "
      >
        {text}
      </div>

      <div className="titleBorderRight opacity-0 h-3 sm:h-5 md:h-7 w-20% sm:w-full bg-titleBorder" />
    </div>
  );
}
