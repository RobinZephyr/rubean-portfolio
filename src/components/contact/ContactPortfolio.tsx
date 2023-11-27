import React from 'react';
import TitleContact from './TitleContact';
import ContactMeContainer from './ContactMeContainer';

function ContactPortfolio() {
  return (
    <div className=' bg-bkg'>
      <div>
        <TitleContact/>
      </div>

      <div className='w-full flex justify-center mt-5 p-5 pb-10 '>
        <div className='md:max-w-3xl w-full '>
            <div>
              <ContactMeContainer/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPortfolio;
