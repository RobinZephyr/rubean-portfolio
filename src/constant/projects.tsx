import { iconJournalComplete, iconPortfolioVid, iconSirmatafarm, iconStandardCheckpoint, iconVideoGameSystem, journalComplete, portfolioVid, sirmatafarm, standardCheckpoint, videoGameSystem } from "@/assets"
import { FaHouseChimney, FaLaptopFile, FaToolbox } from "react-icons/fa6"
import { IoIosContact } from "react-icons/io"
import { IoInformationCircleSharp } from "react-icons/io5"
import { MdDesignServices } from "react-icons/md"

export const projects = [
    {
        id:1,
        projectName:'2019 Portfolio Project',
        link:'https://youtu.be/m-D0vArTz60',
        image:portfolioVid,
        icon:iconPortfolioVid,
        parts:[
            { text: 'A final grade project made back in 2019. I am very camera shy, so rather than talking to the camera I spent several months animating this!', styles: {} },
          ],
    },
    {
        id:2,
        projectName:'2020 Journal Showcase',
        link:'https://youtu.be/8QnlInvJpJU',
        image:journalComplete,
        icon:iconJournalComplete,
        parts:[
            { text: 'A small showcase of a Journal project. The pandemic was just catching up, so that explains all the "wash your hands" references.', styles: {} },
          ],
    },
    {
        id:3,
        projectName:'2022 Video Game System',
        link:'https://youtu.be/nfhwiQzDgNU',
        image:videoGameSystem,
        icon:iconVideoGameSystem,
        parts:[
            { text: 'I believe this was a final project for one of my online classes. Using netbeans and 2-3 workdays i finished and submitted it. I always found it difficult trying to save none Web based projects', styles: {} },
          ],
    },
    {
        id:4,
        projectName:'2023 Standard Checkpoint',
        link:'https://youtu.be/LCdz-oSibcU',
        image:standardCheckpoint,
        icon:iconStandardCheckpoint,
        parts:[
            { text: 'This is a short video infomercial about UFTs and Standard Checkpoints. Made this for a 3LP activity and I really tried to capture those educational tutorials in youtube.', styles: {} },
          ],
    },
    {
        id:5,
        projectName:'2023 SirmataFarm Website',
        link:'sirmatafarm.com',
        image:sirmatafarm,
        icon:iconSirmatafarm,
        parts:[
            { text: 'A boooking website for the Sirmata Ecofarm and Nature Park. If we have the freedom we could remake this poroject into something better.', styles: {} },
          ],
    },

]

