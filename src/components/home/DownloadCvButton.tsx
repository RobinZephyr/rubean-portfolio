import React from 'react'
import { FaDownload } from 'react-icons/fa6'

function DownloadCvButton() {
  return (
    <div>
      <a href="https://drive.google.com/file/d/11emFJK0-gfIF78P0HysTmT-iwDVWv79l/view?usp=sharing">
        <button className=' bg-titleBorder fadeAnimation space-x-1 flex text-downloadButton flex items-center px-3 py-1 rounded-sm'>
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