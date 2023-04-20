import Image from 'next/image';
import styles from './page.module.scss'

import AdvantagesList from '@components/UI/AdvantagesList';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'За нас - PCstar',
}

export default async function About() {
  return (
    <main className={`${styles.main}`}>
      <section className={`container ${styles.titles}`}>
        <h1 className={styles.title}>За нас</h1>
      </section>
      <div className={`container ${styles.aboutContainer}`}>

        <section className={`${styles.aboutSection} ${styles.aboutSection}`}>
          <div className={styles.aboutSectionText}>
            <h2>Кои сме ние?</h2>
            <span>Фирма &quot;PCstar&quot; e една от водещите фирми в България  за внос и продажба на компютърна техника.</span>
            <span>Ние посвещаваме цялата си енергия, опит и професионализъм, за да доставим най-добрите решения и продукти на нашите клиенти.</span>
            <span>Нашата главна цел е задоволяването на вашата нужда от качествена техника на достъпни и изгодни цени</span>
            <span>Ние се стремим да се усъвършенстваме всеки ден.</span>
          </div>
          <div className={styles.aboutSectionImageContainer}>
            <Image loading='eager' src='/images/about/about-img-1.jpg' alt='' fill={true} 
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
              "
              priority={true}
              />
          </div>
        </section>

        <section className={`${styles.aboutSection} ${styles.aboutSectionReverse}`}>
          <div className={styles.aboutSectionText}>
            <h2>Какво предлагаме?</h2>

            <span>Разполагаме с разнообразна, специално подбрана, качествена стока.</span>

            <span>Предлагаме продукти на световните лидери в IT сектора: Dell, HP, Lenovo, Fujitsu, Eizo,Wincor-Nixdorf, Samsung, LG, Toshiba, Sony, Nvidia, ATI, Nec, Elo, Symbol/Motorola, Datalogic, Zebra, Wincor-Nixdorf и др.</span>
            
            <span>Гаранционният и извънгаранционният ни сервиз гарантира изправността не само за всички наши продукти, но и за вашата лична техника.</span>
            
            <span>Предоставяме професионални технически консултации за да може да направите най-добрият избор за вашата техника.</span>

          </div>
          <div className={styles.aboutSectionImageContainer}>
            <Image loading='eager' src='/images/about/about-img-2.jpg' alt='' fill={true}
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
              "
              priority={true}
            />
          </div>
        </section>

        <section className={`${styles.aboutSection}`}>
          <div className={styles.aboutSectionText}>
            <h2>Защо да ни изберете?</h2>

            <ul className={styles.aboutSectionList}>
              <li>
                <h3>Коректност</h3>
                <span>Ние сме коректни към нашите клиенти. Стремим се винаги да изпълняваме обещанията, които сме направили.</span>
              </li>
              <li>
                <h3>Точност</h3>
                <span>Нашия стремеж е да изпълняваме всички поръчки точно, както са зададени.</span>
              </li>
              <li>
                <h3>Сигурност</h3>
                <span>Ние извършваме сигурни доставки. За последните 10 години нямаме загубена доставка на стока.</span>
              </li>
              <li>
                <h3>Бързина</h3>
                <span>Нашия стремеж е да изпълняваме нашите обещания точно навреме, максимално бързо.</span>
              </li>
            </ul>
  
          </div>
          <div className={styles.aboutSectionImageContainer}>
            <Image loading='eager' src='/images/about/about-img-3.jpg' alt='' fill={true}
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
              "
              priority={true}
            />
          </div>
        </section>
        

        <AdvantagesList />
      </div>
    </main>
  )
}

/*
  about-img-1
  Photo by <a href="https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sigmund</a> on <a href="https://unsplash.com/s/photos/computer-store?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  about-img-2
  Photo by <a href="https://unsplash.com/@oria_hector?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Héctor Martínez</a> on <a href="https://unsplash.com/s/photos/computer-store?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  about-img-3
  Photo by <a href="https://unsplash.com/ko/@krakenimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">krakenimages</a> on <a href="https://unsplash.com/photos/376KN_ISplE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
*/
