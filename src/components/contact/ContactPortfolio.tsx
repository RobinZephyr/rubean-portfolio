import React, { useEffect } from 'react';
import TitleContact from './TitleContact';
import ContactMeContainer from './ContactMeContainer';
import gsap from "gsap";

function ContactPortfolio() {
  useEffect(() => {
    gsap.set('.contactFormIntro', { y: 50 });
    gsap.to('.contactFormIntro', {
      scrollTrigger: {
        trigger: '.titleScrollContact', // Updated trigger to '.titleScrollContact'
        start: 'top 70%',
        end: 'bottom 500px',
        scrub: 1,
      },
      y: 0,
      duration: 2,
      ease: 'power2.out',
      opacity: 1,
      delay: .2,
    });
  }, []);

  return (
    <div className=' bg-bkg pb-[5rem]'>
      <div>
        <TitleContact/>
      </div>

      <div className='w-full flex justify-center mt-5 p-5  lg:h-screen  items-center'>
        <div className='md:max-w-3xl 2xl:max-w-5xl w-full  '>
            <div className=' contactFormIntro opacity-0'>
              <ContactMeContainer/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPortfolio;
