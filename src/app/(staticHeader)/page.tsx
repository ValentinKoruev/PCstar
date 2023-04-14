import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss'

import Header from '@components/Header';
import Footer from '@components/Footer';
import Slider from '@components/Slider'
import ItemList from '@components/UI/ItemList'
import Item from '@components/UI/Item';
import AdvantagesList from '@components/UI/AdvantagesList';
import CategoryPreview from '@components/UI/CategoryPreview';
import { prisma } from '@server/db/client';
import { Open_Sans } from 'next/font/google';
import RatingCard from '@components/UI/RatingCard';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic', 'latin'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
}) 

const images = [
  {src: '/images/slider/slider-image1.png', alt: 'slider img'},
  {src: '/images/slider/slider-image2.jpg', alt: 'slider img'},
  {src: '/images/slider/slider-image3.jpg', alt: 'slider img'},
  {src: '/images/slider/slider-image4.jpg', alt: 'slider img'},
  {src: '/images/slider/slider-image5.jpg', alt: 'slider img'},
]

export const revalidate = 60;

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
  
  const topOffers = await prisma.topOffer.findMany({
    take: 4,
    include: {
      item: true
    }
  });



  return (
    <React.Fragment>
      <main className={`${openSans.className} ${styles.main}`}>
        <Slider images={formatImageArray(images)}/>
        <AdvantagesList />
        <section className={`container ${styles.previewSection}`}>
          <h2 className={styles.previewTitle}>Категории</h2>
          <ul className={styles.previewList}>
            <CategoryPreview title='Компютри и компоненти' link='/catalog/computers' imageSrc='/images/previews/computer_preview.webp'/>
            <CategoryPreview title='Лаптопи и компоненти' link='/catalog/laptops' imageSrc='/images/previews/laptop_preview.jpg'/>
            <CategoryPreview title='Монитори' link='/catalog/monitors' imageSrc='/images/previews/monitor_preview.webp'/>
            <CategoryPreview title='Периферия и аксесоари' link='/catalog/peripherals' imageSrc='/images/previews/peripherals_preview.jpg'/>
            <CategoryPreview title='Принтери и консумативи' link='/catalog/printers' imageSrc='/images/previews/printer_preview.webp'/>
            <CategoryPreview title='Смартфони и таблети' link='/catalog/mobile' imageSrc='/images/previews/mobile_preview.jpg'/>
            <CategoryPreview title='TV, фото и видео' link='/catalog/tv-video-photo' imageSrc='/images/previews/tv_preview.jpg'/>
            <CategoryPreview title='Софтуер' link='/catalog/software' imageSrc='/images/previews/software_preview.jpg'/>
            <CategoryPreview title='Мрежово оборудване' link='/catalog/network' imageSrc='/images/previews/network_preview.webp'/>
          
          </ul>
        </section>
        <section className={`container ${styles.promoContainer}`}>
          <h2 className={styles.promoHeading}>Топ оферти</h2>
          <div className={`${styles.promoItemsContainer}`}>
            <ul className={styles.promoItemListContainer}>
                {
                  topOffers.map((offer, idx) => {
                    let item = offer.item;
                    return  <Item key={idx} title={item.title} image={{src: item.imageSrc, alt: item.title}} price={item.price} prevPrice={item.prevPrice ? item.prevPrice : undefined} link={`/products/${item.id}`} idx={idx} elements={4}/>
                  })
                }
            </ul>
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
                <span>висококачествени продукта</span>
              </div>
              <div className={styles.infoElement}>
                <h2>1000+</h2>
                <span>доволни клиенти</span>
              </div>
            </div>
          </div>
        </section>
        <section className={`container ${styles.ratingsSection}`}>
          <h2 className={styles.ratingsTitle}>Мнения на клиенти</h2>
          <div className={styles.ratingsContainer}>
            <RatingCard rating={5} name='Иван Иванов' comment='Много бързо и коректно обслужване. Не за първи път пазарувам от тук и няма да е и за последен!'/>
            <RatingCard rating={5} name='Петър Петров' comment='Бях приятно изненадан обслужването, което получих от Вашия компютърен уеб магазин. Продуктите бяха доставени навреме и в отлично състояние.'/>
            <RatingCard rating={4} name='Симеон Симеонов' comment='Изпитах леко разочарование от скоростта на доставката, която беше малко по-бавна от очакваното, но техниката пристигна в перфектно състояние и си заслужаваше чакането!'/>
            <RatingCard rating={1} name='Валентин Коруев' comment='Има какво да се желае... Ама иначе става.'/>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
