import { FaHouseChimney, FaLaptopFile, FaToolbox } from "react-icons/fa6"
import { IoIosContact } from "react-icons/io"
import { IoInformationCircleSharp } from "react-icons/io5"
import { MdDesignServices } from "react-icons/md"

export const navigatorLinks = [
    {   
        id:'1',
        title:'HOME',
        link:'/home',
        icon: FaHouseChimney,
      },
    {
        id:'2',
        title:'ABOUT',
        link:'/about',
        icon: IoInformationCircleSharp,
      },
    {
        id:'3',
        title:'PROJECT',
        link:'/projects',
        icon: FaToolbox,
      },
    {
        id:'4',
        title:'BLOG',
        link:'/blog',
        icon: FaLaptopFile,
    },
    {
        id:'5',
        title:'CONTACT',
        link:'/contact',
        icon: IoIosContact,

    },
]

