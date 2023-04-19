'use client'

import Link from 'next/link';
import MenuOption from '@components/UI/MenuOption';
import dropdowns from '@server/lib/categories';
import { MouseEventHandler, useState } from 'react';

import styles from './StaticHeader.module.scss'

const StaticHeader = () => {

    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    const handleMenuClick : MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        if(window.innerWidth < 1200) {
            setToggleDropdown(toggleDropdown => !toggleDropdown);
        }
    }


    return <header className={`${styles.header}`}>
        <div className={`container ${styles.headerContent}`}>
            <div className={styles.navTopRow}>
                <Link href='/' className={styles.title}><h1>PCstar</h1></Link>
                <ul className={styles.userMenu}>
                    <li>
                        <Link href="#" aria-label="Go to profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Go to favourites">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" aria-label="Go to cart">
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
                            <MenuOption iconURL="/icons/desktop-pc.png" text="Компютри и компоненти" alt="computer icon" dropdownList={dropdowns.computerDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/laptop.png" text="Лаптопи и компоненти" alt="laptop icon" dropdownList={dropdowns.laptopDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/monitor.png" text="Монитори" alt="monitor icon" dropdownList={dropdowns.monitorDropdown}  setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/ram.png" text="Аксесоари и периферия" alt="ram icon" dropdownList={dropdowns.peripheralsDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/printer.png" text="Принтери и консумативи" alt="printer icon"  dropdownList={dropdowns.printerDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/mobile-phone.png" text="Смартфони и таблети" alt="smartphone icon" dropdownList={dropdowns.mobileDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/tv.png" text="TV, фото и видео" alt="tv icon" dropdownList={dropdowns.tvDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/software.png" text="Софтуер" alt="software icon" dropdownList={dropdowns.softwareDropdown} setDropdown={setToggleDropdown}/>
                            <MenuOption iconURL="/icons/wifi-router.png" text="Мрежово оборудване" alt="router icon" dropdownList={dropdowns.networkDropdown} setDropdown={setToggleDropdown}/>       
                        </ul>
                </nav>
                <nav className={styles.offerNav}>
                    <ul className={styles.offerList}>
                        <li className={styles.navEl}><Link href="/promo">Промоции</Link></li>
                        <li className={styles.navEl}><Link href="/about">За нас</Link></li>
                        <li className={styles.navEl}><Link href="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </div> 
        </div>
    </header>
}

export default StaticHeader;