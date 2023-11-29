"use client";
import React, { useState, } from 'react';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { navigatorLinks } from '@/constant/navigation';
import '../../assets/style/animation.css'
import gsap from 'gsap'
import MobileNav from './MobileNav';
import { logoDarkMode, logoLightMode } from '@/assets';
import Image from 'next/image';
// HeadersPortfolio.js
import { Link as ScrollLink } from 'react-scroll';

library.add(fas);


export default function HeadersPortfolio() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsLightTheme(!isLightTheme);
  };

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('.bgBlack');
    const xIcon = document.querySelector('.xIcon');
  
    gsap.set(xIcon, { opacity: 0 });
  
    if (isMobileMenuOpen && mobileMenu) {
      gsap.to([mobileMenu], {
        opacity: 0,
        duration: 0.5,
        y: 100,
        ease: 'power4.inOut',
        onComplete: () => {
          setIsMobileMenuOpen(false);
          gsap.set(mobileMenu, { opacity: 0, y: 100 });
          mobileMenu.classList.add('hidden'); // Add hidden class after the animation completes
        },
      });
    } else if (mobileMenu) {
      mobileMenu.classList.remove('hidden');
  
      gsap.set(mobileMenu, { opacity: 0, y: 100 });
      gsap.to([mobileMenu], {
        opacity: 1,
        duration: 0.3,
        y: 0,
        ease: 'power1.out',
      });
  
      const mobileNavButtons = document.querySelectorAll('.mobileNavButton');
      gsap.set(mobileNavButtons, { opacity: 0, y: 200 });
      Array.from(mobileNavButtons).forEach((button, index) => {
        gsap.to(button, {
          opacity: 1,
          duration: 0.4,
          delay: 0.3 + index * 0.2, // Incremental delay
          y: 0,
          ease: 'back.out',
        });
      });
  
      setIsMobileMenuOpen(true);
    }
  };
  

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };
  const scrollToSection = (link: string, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    let headerHeight = 73;
    if (window.innerWidth < 768) {
      headerHeight = 90; // Adjust this value as needed for your design
    }
  
    const headerHeightContact = 0;
  
    if (link === 'home') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const scrollPosition = homeSection.offsetTop - headerHeight;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    } else {
      const section = document.getElementById(link);
      if (section) {
        let scrollPosition;
  
        if (link === "contact") {
          // Use headerHeightContact for the "Contact" section
          scrollPosition = section.offsetTop - headerHeightContact;
        } else {
          // Use headerHeight for other sections
          scrollPosition = section.offsetTop - headerHeight;
        }
  
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    }
  
    closeMobileMenu();
  };
  
  
  return (
    <header className="sticky top-0 absolute z-50 h-full flex  items-center bg-bkg h-20 z-50 HeadersIntro opacity-0" style={{zIndex:'9999'}}>
        <div className='w-full h-full flex-col items-center  my-3'>
          
          <div className='text-content  border-b-2  border-t-2 border-content h-70% w-full flex bg-border grid grid-cols-2'>
           
              <div className='p-3   items-center flex  justify-start md:w-25% md:justify-start'>
                {isLightTheme ? (
                  <Image src={ logoLightMode} alt="Logo" className='w-10 h-10'/>
                ):(
                  <Image src={logoDarkMode} alt="Logo" className='w-10 h-10'/>
                )}
              </div>

              <div className='  items-center  p-3 justify-end flex  '>

                  {/**Desktop */}
                  <div className='relative justify-end  space-x-5 whitespace-nowrap hidden md:flex grid grid-cols-2'>
  {navigatorLinks.map((nav) => (
    <div
      key={nav.id}
      className='fadeInDown  whitespace-nowrap fadeAnimation text-text  hover:underline cursor-pointer'
      onClick={(event) => scrollToSection(nav.link, event)}
    >
      {nav.title}
    </div>
  ))}
  <div className='fadeAnimation text-text ' style={{ zIndex: 100 }}> 
    <ThemeButton isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
  </div>
</div>

                  
                  <div className='fadeAnimation text-text   md:hidden block  mr-3' style={{ zIndex: 100 }}> 
                      <ThemeButton isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
                  </div>

                  <div
                    className={`text-2xl w-10 h-10 md:hidden block flex items-center justify-center fadeAnimation text-text  `}
                    onClick={toggleMobileMenu}>
                {!isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={['fas', 'bars']} className=''/>
                ):(
                  <FontAwesomeIcon icon={['fas', 'xmark']} className=''/>
                )}
                  </div>

              </div>
          </div>
       
       
       
          {/**Mobile Nav */}
          <MobileNav scrollToSection={scrollToSection}/>
        </div>
    </header>
  );
}
