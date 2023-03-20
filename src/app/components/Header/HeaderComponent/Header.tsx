import MenuOption from '@components/UI/MenuOption';
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})

import styles from './Header.module.scss'



const Header = () => {
    return <header className={`container ${openSans.className} ${styles.header}`}>
        <div className={styles.navTopRow}>
            <h1>TITLEXD</h1>
            <form className={styles.searchBox}>
                <input type='text'/>
            </form>
            <ul className={styles.userMenu}>
                <li><a href="#">Профил</a></li>
                <li><a href="#">Любими</a></li>
                <li><a href="#">Количка</a></li>
            </ul>
        </div>
        <div className={styles.mainNavContainer}>
            <nav  className={styles.megaMenuNav}>
                <div className={`${styles.navEl} ${styles.megaMenuHeader}`}>
                    <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#000000"/>
                    </svg>
                    <span>Категории</span>
                </div>
                <ul className={styles.megaMenuOptions}>
                    <MenuOption iconURL="/icons/desktop-pc.png" link='#' text="Компютри" alt="computer icon"/>
                    <MenuOption iconURL="/icons/laptop.png" link='#' text="Лаптопи" alt="laptop icon"/>
                    <MenuOption iconURL="/icons/monitor.png" link='#' text="Монитори" alt="monitor icon"/>
                    <MenuOption iconURL="/icons/ram.png" link='#' text="Компоненти и периферия" alt="ram icon"/>
                    <MenuOption iconURL="/icons/printer.png" link='#' text="Принтери и консумативи" alt="printer icon"/>
                    <MenuOption iconURL="/icons/mobile-phone.png" link='#' text="Смартфони и таблети" alt="smartphone icon"/>
                    <MenuOption iconURL="/icons/tv.png" link='#' text="TV, аудио и видео" alt="tv icon"/>
                    <MenuOption iconURL="/icons/software.png" link='#' text="Софтуер" alt="software icon"/>
                    <MenuOption iconURL="/icons/wifi-router.png" link='#' text="Мрежово оборудване" alt="router icon"/>       
                </ul>
            </nav>
            <nav className={styles.offerNav}>
                <ul>
                    <li className={styles.navEl}><a href="#">Промоции</a></li>
                    <li className={styles.navEl}><a href="#">Магазини</a></li>
                    <li className={styles.navEl}><a href="#">За нас</a></li>
                    <li className={styles.navEl}><a href="#">Контакти</a></li>
                </ul>
            </nav>
        </div> 
    </header>
}

export default Header;