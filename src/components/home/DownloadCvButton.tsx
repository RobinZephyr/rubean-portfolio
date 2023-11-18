import React from 'react'
import { FaDownload } from 'react-icons/fa6'

function DownloadCvButton() {
  return (
    <div>
        <button className='bg-titleBorder fadeAnimation space-x-1 flex text-downloadButton flex items-center px-3 py-1 rounded-sm'>
        <FaDownload className=''/>
          <p>
          Download CV
          </p>
        </button>
    </div>
  )
}

export default DownloadCvButton