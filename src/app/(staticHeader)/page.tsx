import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss'

import Header from '@components/Header';
import Footer from '@components/Footer';
import Slider from '@components/Slider'
import ItemList from '@components/UI/ItemList'
import { IItem } from '@components/UI/Item';
import AdvantagesList from '@components/UI/AdvantagesList';

import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic', 'latin'],
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

const items: any = [
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Ayaya",
    image: {src: '/images/products/ayaya.png', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/pc-1.jpg', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  ,
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/pc-1.jpg', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Lenovo ThinkCentre M83",
    image: {src: '/images/products/computers/dell_Vostro_3910_MT.webp', alt: "item image"},
    price: 699,
    prevPrice: 42,
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
    <React.Fragment>
      <main className={`${openSans.className} ${styles.main}`}>
        <Slider images={formatImageArray(images)}/>
        <AdvantagesList />
        <section className={`container ${styles.promoContainer}`}>
          <h1 className={styles.promoHeading}>Топ оферти</h1>
          <div className={`${styles.promoItemsContainer}`}>

            <div className={styles.promoItemListContainer}>
                <ItemList elements={5} items={items} />
            </div>
          </div>
        </section>
        <section className={styles.infoSection}>
          <div className={`container ${styles.infoContent}`}>
            <h1 className={styles.infoHeading}>Защо да ни изберете?</h1>
            <div className={styles.infoList}>
              <div className={styles.infoElement}>
                <h2>10+</h2>
                <span>години професионален опит</span>
              </div>
              <div className={styles.infoElement}>
                <h2>500+</h2>
                <span>качествени продукти</span>
              </div>
              <div className={styles.infoElement}>
                <h2>1000+</h2>
                <span>доволни клиенти</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutSection}></section>
      </main>
    </React.Fragment>
  )
}
