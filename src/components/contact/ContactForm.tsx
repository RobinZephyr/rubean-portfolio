import React, { useState } from 'react';
import { FaCircle, FaSpinner } from 'react-icons/fa6';
import Swal from 'sweetalert2';

function ContactForm() {
    const [sendLoading,setSendLoading]=useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      setSendLoading(true);
  
      if (name === '' || email === '' || message === '') {
        setSendLoading(false);
        Swal.fire({
            title: "Please fill in all fields",
            icon: "info"
          });
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
      
        setSendLoading(false);
        Swal.fire({
            title: "Invalid email format",
            icon: "warning"
          });
        return;
      }
  
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
       

        Swal.fire({
            title: "Email sent successfully",
            text: "I'll get back to you ASAP.",
            icon: "success"
          });
          
        setEmail('');
        setName('');
        setMessage('');
      } else {
        Swal.fire({
            title: "Failed to send email",
            icon: "error"
          });
        setEmail('');
        setName('');
        setMessage('');
      }
  
      setSendLoading(false);
    } catch (error) {
        Swal.fire({
            title: "Failed to send email",
            icon: "error"
          });
      setSendLoading(false);
    }
  };
  
  return (
    <div className='w-full min-w-70% max-w-[500px]'>
      <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>Name</div>
        <input
          className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>Email</div>
        <input
          className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>Message</div>
        <textarea
          className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full h-24 min-h-[7rem]'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className='w-full flex justify-center mt-2'>
        <button
          className='w-60% text-downloadButton items-center min-h-[40px] flex justify-center bg-titleBorder rounded-sm shadow-md py-2'
          onClick={handleSubmit}
        >
          {sendLoading?(
            <FaSpinner className="icon-spin fa-spin"/>
          ):  (
            "Send"
          )}
          
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
