import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const ContactLinks = () => {
  return (
    <div className='text-2xl text-text  flex gap-2 md:gap-3 '>
      <a href='https://facebook.com' className='fadeAnimation cursor-pointer '>
        <FaFacebook />
      </a>
      <a href='https://twitter.com' className='fadeAnimation cursor-pointer'>
        <FaTwitter />
      </a>
      <a href='https://github.com' className='fadeAnimation cursor-pointer '>
        <FaGithub />
      </a>
      <a href='https://linkedin.com' className='fadeAnimation cursor-pointer'>
        <FaLinkedin />
      </a>
    </div>
  );
};
