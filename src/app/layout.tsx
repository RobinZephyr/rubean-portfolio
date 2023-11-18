import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../assets/style/header.css'
import '../assets/style/animation.css'
import '../assets/style/elements.css'
import HeadersPortfolio from '@/components/layout/HeadersPortfolio'
import SideBorder from '@/components/layout/SideBorder'
import HomePortolio from '@/components/home/HomePortfolio'
import AboutPortfolio from '@/components/about/AboutPortfolio'
import Mobilenavbar from '@/components/layout/Mobilenavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'by Rubean Rakeru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='  h-full'>
        <div className='flex h-full'>
          <SideBorder/>
            <div className='w-full h-full flex-col'>
              <HeadersPortfolio/>
                {children}
            </div>
            <SideBorder/>
        </div>
      </body>
    </html>
  )
}
