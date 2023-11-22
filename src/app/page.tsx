import AboutPortfolio from '@/components/about/AboutPortfolio'
import HomePortolio from '@/components/home/HomePortfolio'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full flex h-full'>
      <div className="w-full h-full">
        <HomePortolio/>
        <AboutPortfolio/>
      </div>  

    </main>
  )
}
