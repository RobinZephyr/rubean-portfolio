import React from 'react'

function ContactForm() {
  return (
    <div className=''>
    <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>
            Name
        </div>
        <input className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full'/>
    </div>
    <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>
            Email
        </div>
        <input className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full'/>
    </div>
    <div className='w-full px-4 mt-2'>
        <div className='text-text text-xl'>
            Message
        </div>
        <textarea className='border-0 bg-textbox shadow-md text-text p-1 rounded-sm w-full h-24 min-h-[7rem]    '/>
    </div>
    <div className='w-full flex justify-center mt-2'>
        <button className='w-60% text-downloadButton  bg-titleBorder rounded-sm shadow-md py-2'>
            Send
        </button>
    </div>
</div>
  )
}

export default ContactForm