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
    subsets: ['cyrillic'],
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
  }
]

const items1 = [
  {
    title: "🤓",
    image: {src: '/images/products/nerd.jfif', alt: "item image"},
    price: 699,
    prevPrice: 42,
    link: '#'
  },
  {
    title: "Spark Knight Klee",
    image: {src: '/images/products/klee.jpg', alt: "item image"},
    price: 1200,
    prevPrice: 1300,
    link: '#'
  },
  {
    title: "Stupid rodent",
    image: {src: '/images/products/rodent.jpg', alt: "item image"},
    price: 100,
    prevPrice: 80000000,
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
        <section className={`${styles.promoContainer}`}>
          <h2 className={styles.header}><span>Топ Оферти</span></h2>
          <div className={`container ${styles.promoItemsContainer}`}>
            <div className={styles.topItemContainer}>
              <h2 className={styles.topItemHeader}>Топ Оферта</h2>
              <Link href='#' className={styles.topItemImageContainer}>
                <Image src='/images/products/waltuh.jfif' alt='top item' fill={true}/>
              </Link>
              <div className={styles.topItemContent}>
                <span className={styles.topItemTitle}>Арнолд Уайт</span>
                <div className={styles.topItemPriceContainer}>
                  <span className={styles.topItemPrice}>500.00 лв. <span className={styles.topItemPrevPrice}>730.00 лв. </span></span>
                  
                </div>
              </div>
            </div>
            <div className={styles.promoItemListContainer}>
                <ItemList elements={3} items={items} />
                <ItemList elements={3} items={items1} />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
