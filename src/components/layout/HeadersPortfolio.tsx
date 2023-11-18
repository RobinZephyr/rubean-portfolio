"use client";
import React, { useState } from 'react';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { navigatorLinks } from '@/constant/navigation';
import '../../assets/style/animation.css'

library.add(fas);


export default function HeadersPortfolio() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsLightTheme(!isLightTheme);
  };

  return (
    <header className="sticky top-0 absolute z-50 flex items-center bg-bkg h-20 z-50 ">
        <div className='text-content border-t-2 border-b-2 border-content h-70% w-full flex bg-border'>
            <div className='p-3  md:border-r-2 border-content items-center flex w-20%  justify-center md:w-25% md:justify-start'>
                <div className='w-10 h-10 flex items-center justify-center text-black rounded-full bg-white'>Logo</div>
            </div>

            <div className=' flex items-center justify-end p-3 w-90%'>

                <div className='flex justify-end w-80% space-x-5 w-full whitespace-nowrap hidden md:flex '>
                    {navigatorLinks.map((nav)=>(
                      <span className='fadeInDown  whitespace-nowrap fadeAnimation text-text  hover:underline cursor-pointer' key={nav.title}>
                        {nav.title}
                        </span>
                    ))}
                    <div className='fadeAnimation text-text hover:text-textHover '> 
                      <ThemeButton isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
                    </div>
                </div>
                
                <div className=' text-2xl  w-10 h-10  md:hidden block flex items-center justify-center fadeAnimation fadeInDown text-text hover:text-textHover'>
                  <FontAwesomeIcon icon={['fas', 'bars']} />
                </div>

            </div>
        </div>
    </header>
  );
}
