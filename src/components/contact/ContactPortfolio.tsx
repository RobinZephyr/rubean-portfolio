import React from 'react';
import TitleContact from './TitleContact';
import ContactMeContainer from './ContactMeContainer';

function ContactPortfolio() {
  return (
    <div className=' bg-bkg'>
      <div>
        <TitleContact/>
      </div>

      <div className='w-full flex justify-center border-2 border-green-600 mt-5 p-5 '>
        <div className='md:max-w-4xl w-full border-2 border-red-900'>
            <div>
              <ContactMeContainer/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPortfolio;
