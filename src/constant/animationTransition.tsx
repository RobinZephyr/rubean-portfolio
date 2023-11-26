// AnimationTransition.js
import { useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function AnimationTransition() {
  //Layout
  gsap.set('.HeadersIntro', { opacity: 0, });
  gsap.to('.HeadersIntro', {
    opacity: 1,
    duration: .5, 
    delay: 4,
    y: 0,
  });
  gsap.set('.SideBarLeftIntro', { opacity: 0,  });
  gsap.to('.SideBarLeftIntro', {
    opacity: 1,
    duration: .5,
    delay: 4,
    x: 0,
  });
  gsap.set('.SidebarRightIntro', { opacity: 0,});
  gsap.to('.SidebarRightIntro', {
    opacity: 1,
    duration: .5,
    delay: 4,
    x: 0,
  });

  gsap.to('.BgPitchBack', {
    duration: .5,
    className:'bg-bkg',
    delay: 4,
    opacity:0,
  });
  

  gsap.set('.AvatarSnap', { opacity: 0,});
  gsap.to('.AvatarSnap', {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    y: 0,
  });

  gsap.to('.AvatarSnap', {
    opacity: 0,
    display: 'none',
    duration: 0,
    delay:9,
  });

  gsap.set('.AvatarType', { opacity: 0,display:'none'});
  gsap.to('.AvatarType', {
    opacity:1,
    duration: 0,
    delay:9,
    display:'block'
  });

  gsap.set('.AvatarCircle', { opacity: 0, y: 1, scale: .1 });
  gsap.to('.AvatarCircle', {
    opacity: 1,
    duration: 0.2,
    delay:4,
    ease:'power1.out',
    y: 0,
    scale: 1,
  });


  gsap.set(".HomeTextbox", { opacity: 0, x: -20, z: 50 });
  gsap.to(".HomeTextbox", {
    opacity: 1,
    duration: 0.5,
    delay: 4,
    x: 0,
  });

    gsap.set(".hello-world-letter", { opacity: 0, y: -20 });
    gsap.to(".hello-world-letter", {
      opacity: 1,
      duration: .2,
      delay: (index) =>4.0 + index * 0.1, // stagger the animation
      y: 0,
    });

    gsap.set(".titleBorderLeft", { opacity: 0, x:-20 });
    gsap.to(".titleBorderLeft", {
        opacity: 1,
        duration: .8,
        x:0,
        ease: "power4.inOut",
        delay:4, // stagger the animation
      });

    gsap.set(".titleBorderRight", { opacity: 0, x:20 });
    gsap.to(".titleBorderRight", {
      opacity: 1,
      duration: .8,
      x:0,
      ease: "power4.inOut",
      delay: 4, // stagger the animation
    });

    gsap.set(".play-icon", { opacity: 0, });
    gsap.to(".play-icon", {
      opacity: 1,
      duration: .8,
      x:0,
      ease: "power4.inOut",
      delay: 8.3, // stagger the animation
    });

    gsap.set(".ContactAndDownload", { opacity: 0, y:10});
    gsap.to(".ContactAndDownload", {
      opacity: 1,
      y:0,
      ease: "power1.inOut",
      duration: .8,
      delay:4, 
    });

    
    const naviIcons = document.querySelectorAll('.naviIconHover');
    naviIcons.forEach((naviIcon) => {
      gsap.set(naviIcon, { opacity: 0, x: -50 });
    });
    
    

    

  

      
  }

