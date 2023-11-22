import React, { useEffect } from "react";
import gsap from "gsap";
import { AnimationTransition } from "@/constant/animationTransition";

export default function AboutTitle() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  const text = "About Me";
  return (
    <div className="w-full  flex items-center justify-between">
  
      <div className="titleBorderLeft opacity-0 h-3 sm:h-5 md:h-7 w-15% min-w-[20px] bg-titleBorder"/>
  
      <div className="items-center  flex text-center px-2 w-full sm:w-50% justify-center flex text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold">
        <span style={{ whiteSpace: 'pre' }}>
          {text.split("").map((char, index) => (
            <span key={index} className={`opacity-0 hello-world-letter${char === ' ' ? '' : ''}`}>
              {char === '' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </div>
  
      <div className="titleBorderRight opacity-0  h-3 sm:h-5 md:h-7 w-15%  sm:w-full bg-titleBorder"/>
    </div>
  );
  
}
