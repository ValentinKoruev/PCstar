import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'

import Slider from '@components/Slider'

const inter = Inter({ subsets: ['latin'] })

const images = [
  {src: '/images/slider/image-1.jpg', alt: 'slider img'},
  {src: '/images/slider/image-2.jpg', alt: 'slider img'},
  {src: '/images/slider/image-3.jpg', alt: 'slider img'},
  {src: '/images/slider/image-4.jpg', alt: 'slider img'},
  {src: '/images/slider/image-5.jpg', alt: 'slider img'},
  {src: '/images/slider/image-6.jpg', alt: 'slider img'}
]

export default async function Home() {
  
  const formatImageArray = (images : Array<{src: string, alt: string}>) => {
    let formated = [...images];
    
    if(images.length > 1) {
      let lastImage = formated[formated.length - 1];
      formated.push(formated[0]);
      formated.unshift(lastImage);
    }
    return formated;
  }
  
  
  return (
    <main>
      <Slider images={formatImageArray(images)}/>
    </main>
  )
}
