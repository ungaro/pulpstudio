'use client'


import Image from 'next/image'
import { Inter } from 'next/font/google'
import BackgroundSlideshow from '../components/Slideshow/BackgroundSlideshow'
/*
import image1 from '../public/background.jpg'
import image2 from '../public/background1.jpg'
import image3 from '../public/background2.jpg'
import image4 from '../public/background3.jpg'
*/
const image1 =  '/background.jpg';
const image2 =  '/background1.jpg';
const image3 =  '/background2.jpg';
const image4 =  '/background3.jpg';
/*
  style={{backgroundImage: `url("/background.png")`}} */
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (

    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-cover bg-center p-4 lg:p-24 ${inter.className}`}
    >
        <BackgroundSlideshow />
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
<img src="/logo_web.png"/>
       
      </div>

      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex-row fixed bottom-0  px-4 lg:px-16 ">
      <div className="flex h-32 w-full items-end justify-left  lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          href="https://vimeo.com/889264060?share=copy"
          className="group rounded-lg border border-transparent  py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
<img src="/play_web.png"/>
        </a>
        <a
          href="https://www.instagram.com/pulpstudiotr/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
<img src="/instagram_web.png"/>
        </a>
      </div>




<div className="flow-root mb-8 ">  
    <p className="float-left text-white"><a href="mailto:onur.tunckan@pulpstudio.co">Hello!</a></p> 
    <p className="float-right text-white">Fine Art Services</p>
</div>

</div>




    </main>
  )
}
/*

 <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      
        </div>

*/