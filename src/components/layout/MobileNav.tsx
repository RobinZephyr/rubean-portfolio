import React, { useEffect } from 'react';
import { navigatorLinks } from '@/constant/navigation';
import gsap from 'gsap';
import { AnimationTransition } from '@/constant/animationTransition';

function MobileNav() {
    const handleHoverEnter = (event: React.MouseEvent<HTMLParagraphElement>) => {
      const naviIcon = event.currentTarget.querySelector('.naviIconHover');
      gsap.set(naviIcon, { opacity: 0, x:-50 });
      gsap.to(naviIcon, {
        opacity: 1,
        duration:.5,
        x:0,
        ease:'power1.out'
      });
    };
    const handleHoverLeave = (event: React.MouseEvent<HTMLParagraphElement>) => {
      const naviIcon = event.currentTarget.querySelector('.naviIconHover');
      gsap.to(naviIcon, {
        opacity: 0,
        x:-100,
      });
    };
    useEffect(() => {
      AnimationTransition();
    }, []);

  

  return (
    <div className='bgBlack opacity-0 flex hidden justify-center items-center h-screen absolute bg-black bg-opacity-50 w-full md:hidden' style={{ zIndex: 20 }}>
      <div className='flex  justify-center  w-60% max-w-[300px] mainMenu'>

        <div className='flex-col items-center text-text text-xl w-full '>
        {navigatorLinks.map((nav, index, array) => (
          <div
            className={`shadow-inner border-4  ${index === array.length - 1 ? 'border-b-4' : 'border-b-0'} border-borderMenu h-[75px] whitespace-nowrap grid-cols-3 grid  text-text  flex items-center bg-mainMenu justify-center w-full cursor-pointer   mobileNavButton shadow-inner  `}
            key={nav.title}
            style={{ overflow: 'hidden' }}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >   
              <div className='text-8xl items-center flex opacity-0 naviIconHover text-text h-full  '>
                <span className='absolute'>
                  {nav.icon && React.createElement(nav.icon, { className: 'mr-2' })}
                </span>
              </div>

              <div className='flex justify-center items-center flex h-full '>
                {nav.title}
              </div>

              <div className=' button  w-full h-full bg-opacity-50 hover:bg:red-900'/>
          </div>
        ))}

        </div>
      </div>
    </div>
  );
}

export default MobileNav;
