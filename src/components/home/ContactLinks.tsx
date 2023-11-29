import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa6';

export const ContactLinks = () => {
  return (
    <div className='text-lg md:text-2xl text-text  flex gap-2 md:gap-3 '>
      <a href="https://www.facebook.com/profile.php?id=100006948285802" className='fadeAnimation cursor-pointer '>
        <FaFacebook />
      </a>
      <a href='https://github.com/RobinZephyr' className='fadeAnimation cursor-pointer '>
        <FaGithub />
      </a>
      <a href='https://www.linkedin.com/in/rubean-esguerra-a53151117/' className='fadeAnimation cursor-pointer'>
        <FaLinkedin />
      </a>
      <a href='https://dev.to/robinzephyr' className='fadeAnimation cursor-pointer'>
        <FaDev/>
      </a>
    </div>
  );
};
