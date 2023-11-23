import { skills } from '@/constant/skills';
import React from 'react';
import SkillName from './SkillName';
import { avatarSnap } from '@/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AboutSkillsmenu() {
  const [width, setWidth]=useState(0);
  const carousel = useRef(null);
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  })

  return (
        <motion.div ref={carousel} className='carousel bg-skillMenu w-[600px]'>
          <motion.div className='inner-carousel bg-skillMenu space-x-2 p-2' drag="x" dragConstraints={{right:0, left:-width}}>
            {skills.map((skill) => (
              <motion.div key={skill.id} className='item '>
                <Image src={skill.image} alt={skill.skill} className=''/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
  );
}

export default AboutSkillsmenu;
