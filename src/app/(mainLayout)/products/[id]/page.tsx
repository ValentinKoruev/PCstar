import { prisma } from '@server/db/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ObjectId } from 'mongodb'

import styles from './page.module.scss';

import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
}) 



export default async function Product({params} : {params: {id: string}}) {
  

    if(!ObjectId.isValid(params.id)) notFound();

    const product = await prisma.item.findUnique({
        where: {
            id: params.id
        }
    })

    if(!product) notFound();

  
    return (
      <main className={`${openSans.className} ${styles.main}`}>
        <section className={`container ${styles.productContainer}`}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.productInfo}>
                <div className={styles.imageContainer}>
                    <Image src={product.imageSrc} alt={product.title} fill={true}/>
                </div>
                <div className={styles.productContent}>
                    <div className={styles.productSpecsContainer}>Характериски</div>
                    <div className={styles.productBuyContainer}>Купуване</div>
                </div>
            </div>
        </section>
      </main>
    )
  }
  