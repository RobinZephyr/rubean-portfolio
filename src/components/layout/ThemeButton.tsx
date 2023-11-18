import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

interface ThemeButtonProps {
  isLightTheme: boolean; 
  toggleTheme: () => void; 
}

const ThemeButton = ({ isLightTheme, toggleTheme }: ThemeButtonProps) => {
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button className="" onClick={handleClick} >
                {isLightTheme ? (
                  <FontAwesomeIcon icon={['fas', 'moon']} title="Dark Mode" id="moon-icon"/>
                ):(
                  <FontAwesomeIcon icon={['fas', 'sun']} title="Light Mode" id="sun-icon"/>
                )}
    </button>
  );
};

export default ThemeButton;
