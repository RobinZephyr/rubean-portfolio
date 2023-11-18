// HomeTextbox.tsx
import React, { useEffect } from 'react';
import Nameplate from './Nameplate';
import Textbox from './Textbox';
import { FaPlay } from "react-icons/fa6";

const HomeTextbox: React.FC = () => {
  
  return (
    <div className=' h-50%'>
      <div className=''>
        <Nameplate name="WEB DEVELOPER" />
      </div>
      <div className='z-10'>
        <Textbox dialog="I'm Rubean Rakeru C. Esguerra, a budding web developer specializing in Back-End Development, with a strong front-end skill set to enhance website aesthetics."/>
      </div>
    </div>
  );
}

export default HomeTextbox;
