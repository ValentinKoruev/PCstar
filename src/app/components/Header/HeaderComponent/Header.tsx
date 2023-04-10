'use client'

import Link from 'next/link';
import MenuOption, { IDropdownElement } from '@components/UI/MenuOption';
import { laptopDropdown, monitorDropdown, peripheralsDropdown, printerDropdown, mobileDropdown } from '@server/lib/categories';
import { Open_Sans } from 'next/font/google';
import { MouseEventHandler, useEffect, useState } from 'react';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})

import styles from './Header.module.scss'



const Header = ({computerItems} : {computerItems : any}) => {

    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    /* WILL TRANSFER THEM TO THEIR OWN JSON FILE OR WILL LOAD DYNAMICALLY FROM DB*/

    const handleMenuClick : MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        
        setToggleDropdown(toggleDropdown => !toggleDropdown);
    }

    return <header className={`${styles.header} ${styles.active}`}>
        <div className={`container ${styles.headerContent}`}>
            <div className={styles.navTopRow}>
                <Link href='/' className={styles.title}><h1>PCstar</h1></Link>
                {/* <form className={styles.searchBox}>
                    <input type='text'/>
                </form> */}
                <ul className={styles.userMenu}>
                    <li>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.mainNavContainer}>
                <nav  className={styles.megaMenuNav}>
                    <div onClick={handleMenuClick}className={`${styles.navEl} ${styles.megaMenuHeader}`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#000000"/>
                        </svg>
                        <span>Категории</span>
                    </div> 
                        <ul className={`${styles.megaMenuOptions} ${toggleDropdown ? styles.dropwdownActive : ''}`}>
                            <MenuOption iconURL="/icons/desktop-pc.png" link='#' text="Компютри и компоненти" dropdownList={computerItems} alt="computer icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/laptop.png" link='#' text="Лаптопи и компоненти" dropdownList={laptopDropdown} alt="laptop icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/monitor.png" link='#' text="Монитори" dropdownList={monitorDropdown} alt="monitor icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/ram.png" link='#' text="Аксесоари и периферия" dropdownList={peripheralsDropdown} alt="ram icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/printer.png" link='#' text="Принтери и консумативи" dropdownList={printerDropdown} alt="printer icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/mobile-phone.png" link='#' text="Смартфони и таблети" dropdownList={mobileDropdown} alt="smartphone icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/tv.png" link='#' text="TV, аудио и видео" alt="tv icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/software.png" link='#' text="Софтуер" alt="software icon" setDropdown={setToggleDropdown} isStatic={false}/>
                            <MenuOption iconURL="/icons/wifi-router.png" link='#' text="Мрежово оборудване" alt="router icon" setDropdown={setToggleDropdown} isStatic={false}/>       
                        </ul>
                </nav>
                <nav className={styles.offerNav}>
                    <ul className={styles.offerList}>
                        <li className={styles.navEl}><Link href="#">Промоции</Link></li>
                        <li className={styles.navEl}><Link href="/about">За нас</Link></li>
                        <li className={styles.navEl}><Link href="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </div> 
        </div>
    </header>
}

export default Header;