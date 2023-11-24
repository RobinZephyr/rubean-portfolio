import { skills } from '@/constant/skills';
import React from 'react';
import SkillName from './SkillName';
import { avatarSnap } from '@/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Nameplate from '../home/Nameplate';

function AboutSkillsmenu() {


  return (
  <div className='w-full'>
      <div className='justify-center flex'>
        <SkillName skillName="SKILLS"/>
      </div>

    <div  className='carousel bg-skillMenu w-full md:w-[600px] mt-4 pt-4  rounded-sm'>
    <div className='overflow-none overflow-x-auto scrollbar px-2 inner-carousel bg-skillMenu   flex gap-4 py-1' >
      {skills.map((skill) => (
        < div key={skill.id} className='min-w-[4rem] px-2 py-1 rounded-md item bg-textbox fadeAnimation shadow-sm' >
            <Image src={skill.image} alt={skill.skill} className='' title={skill.skill}/>
        </div>
      ))}
    </div>

    </div>
  </div>

  );
}

export default AboutSkillsmenu;




