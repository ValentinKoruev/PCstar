import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss'


import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
}) 

export default async function Home() {
  
  
  return (
    <main className={styles.aboutContainer}>
        
    </main>
  )
}
