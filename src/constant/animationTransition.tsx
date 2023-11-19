// AnimationTransition.js
import { useEffect } from 'react';
import gsap from 'gsap'

export function AnimationTransition() {

  gsap.set('.AvatarSnap', { opacity: 0, y: -20 });
  gsap.to('.AvatarSnap', {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    y: 0,
  });

  gsap.set('.AvatarCircle', { opacity: 0, y: 1, scale: .1 });
  gsap.to('.AvatarCircle', {
    opacity: 1,
    duration: 0.2,
    delay: 4.7,
    ease:'power1.out',
    y: 0,
    scale: 1,
  });

  gsap.set(".HomeTextbox", { opacity: 0, x: -20, z: 50 });
  gsap.to(".HomeTextbox", {
    opacity: 1,
    duration: 0.5,
    delay: 4.7,
    x: 0,
  });

    gsap.set(".hello-world-letter", { opacity: 0, y: -20 });
    gsap.to(".hello-world-letter", {
      opacity: 1,
      duration: .2,
      delay: (index) =>4.7 + index * 0.1, // stagger the animation
      y: 0,
    });

    gsap.set(".titleBorderLeft", { opacity: 0, x:-20 });
    gsap.to(".titleBorderLeft", {
        opacity: 1,
        duration: .8,
        x:0,
        ease: "power4.inOut",
        delay: 4.7, // stagger the animation
      });

    gsap.set(".titleBorderRight", { opacity: 0, x:20 });
    gsap.to(".titleBorderRight", {
      opacity: 1,
      duration: .8,
      x:0,
      ease: "power4.inOut",
      delay: 4.7, // stagger the animation
    });



    gsap.set(".letter-chat", { opacity: 0, y:0 });
    gsap.to(".letter-chat", {
      opacity: 1,
      duration: .01,
      delay: (index) =>9 + index * 0.03, // stagger the animation
      y: 0,
    });

    gsap.set(".play-icon", { opacity: 0, });
    gsap.to(".play-icon", {
      opacity: 1,
      duration: .8,
      x:0,
      ease: "power4.inOut",
      delay: 9, // stagger the animation
    });

}
