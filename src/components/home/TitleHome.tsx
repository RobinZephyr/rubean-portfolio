import React, { useEffect } from "react";
import gsap from "gsap";
import { AnimationTransition } from "@/constant/animationTransition";

export default function TitleHome() {
  useEffect(() => {
    AnimationTransition()
  }, []);

  const text = "HELLO WORLD!";
  return (
    <div className="w-full  flex items-center justify-between">
  
      <div className="titleBorderLeft opacity-0 h-3 sm:h-5 md:h-7 w-15% bg-titleBorder"/>
  
      <div className="w-full items-center  flex text-center px-2 justify-center flex text-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap font-bold">
        <span style={{ whiteSpace: 'pre' }}>
          {text.split("").map((char, index) => (
            <span key={index} className={`opacity-0 hello-world-letter${char === ' ' ? '' : ''}`}>
              {char === '' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </div>
  
      <div className="titleBorderRight opacity-0  h-3 sm:h-5 md:h-7 w-15% bg-titleBorder"/>
    </div>
  );
  
}
