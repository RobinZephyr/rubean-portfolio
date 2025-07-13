import React from 'react'
import { FaDownload } from 'react-icons/fa6'

function DownloadCvButton() {
  return (
    <div>
      <a href="https://drive.google.com/file/d/1PZY1ZChjsjHaIiKV9Vae3EsI3kR16hHe/view?usp=drive_link">
        <button className='whitespace-nowrap ml-2 bg-titleBorder fadeAnimation space-x-1 flex text-downloadButton flex items-center text-md md:text-xl px-1 py-1 md:px-3 md:py-1 rounded-sm'>
        <FaDownload className=''/>
          <p>
          Download CV
          </p>
        </button>
      </a>
    </div>
  )
}

export default DownloadCvButton