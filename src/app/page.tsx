import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'

import Slider from '@components/Slider'
import ItemList, { IItem } from '@components/UI/ItemList'

import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['latin', 'cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})

const images = [
  {src: '/images/slider/image-1.jpg', alt: 'slider img'},
  {src: '/images/slider/image-2.jpg', alt: 'slider img'},
  {src: '/images/slider/image-3.jpg', alt: 'slider img'},
  {src: '/images/slider/image-4.jpg', alt: 'slider img'},
  {src: '/images/slider/image-5.jpg', alt: 'slider img'},
  {src: '/images/slider/image-6.jpg', alt: 'slider img'}
]

const items: Array<IItem> = [
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/pc-1.jpg', alt: "item image"},
    price: 699,
    link: '#'
  },
  {
    title: "Ayaya",
    image: {src: '/images/products/ayaya.png', alt: "item image"},
    price: 699,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/pc-1.jpg', alt: "item image"},
    price: 699,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/pc-1.jpg', alt: "item image"},
    price: 699,
    link: '#'
  },
  {
    title: "Spark Knight Klee",
    image: {src: '/images/products/klee.jpg', alt: "item image"},
    price: 1200,
    link: '#'
  },
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
    <main className={openSans.className}>
      <Slider images={formatImageArray(images)}/>
      <section className={`container ${styles.promoContainer}`}>
        <h2 className={styles.header}>Промоции</h2>
        <ItemList items={items}/>
      </section>
    </main>
  )
}
