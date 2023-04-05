'use client'

import Link from 'next/link';
import MenuOption, { IDropdownElement } from '@components/UI/MenuOption';
import { Open_Sans } from 'next/font/google';
import { MouseEventHandler, useState } from 'react';
const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})

import styles from './Header.module.scss'



const Header = ({isStatic=false, computerItems} : {isStatic?: boolean, computerItems : any}) => {

    const [toggleDropdown, setToggleDropdown] = useState<boolean>(isStatic ? true : false);

    /* WILL TRANSFER THEM TO THEIR OWN JSON FILE OR WILL LOAD DYNAMICALLY FROM DB*/
    
    const laptopDropdown : IDropdownElement[] = [
        { 
            header: { text: "Лаптопи", href: "#"},
            content: [
                { text: "Apple", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "Dell", href: '#'},
                { text: "Lenovo", href: '#'},
                { text: "Toshiba", href: '#'},
            ] 
        },
        { 
            header: { text: "Геймърски Лаптопи", href: "#"},
            content: [
                { text: "ASUS", href: '#'},
                { text: "Dell", href: '#'},
                { text: "Lenovo", href: '#'},
                { text: "HP", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Alienware", href: '#'},
            ] 
        },
        { 
            header: { text: "Адаптери", href: "#"},
            content: [
                { text: "ASUS", href: '#'},
                { text: "Toshiba", href: '#'},
                { text: "Lenovo", href: '#'},
                { text: "Acer", href: '#'},
                { text: "HP", href: '#'},
                { text: "Sony", href: '#'},
                { text: "Samsung", href: '#'},
            ] 
        },     
        { 
            header: { text: "Батерии", href: "#"},
            content: [] 
        },  
        { 
            header: { text: "Видео карти", href: "#"},
            content: [
                { text: "ASUS", href: '#'},
                { text: "GIGABYTE", href: '#'},
                { text: "MSI", href: '#'},
                { text: "ASRock", href: '#'},
                { text: "Zotac", href: '#'},
                { text: "EVGA", href: '#'},
            ] 
        }, 
        { 
            header: { text: "Памети", href: "#"},
            content: [
                { text: "DDR", href: '#'},
                { text: "DDR2", href: '#'},
                { text: "DDR3", href: '#'},
                { text: "DDR4", href: '#'},
                { text: "DDR5", href: '#'},
            ] 
        }, 
        { 
            header: { text: "HDD/SSD", href: "#"},
            content: [
                { text: "HDD", href: '#'},
                { text: "SSD", href: '#'},
                { text: "Външни HDD", href: '#'},
            ] 
        }, 
        { 
            header: { text: "Захранване", href: "#"},
            content: [
                { text: "Apple", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "Dell", href: '#'},
                { text: "Fortron", href: '#'},
                { text: "Hama", href: '#'},
            ] 
        },     
    ] 
    const monitorDropdown : IDropdownElement[] = [
        { 
            header: { text: '15" - 17"', href: "#"},
            content: [
                { text: "AOC", href: '#'},
                { text: "AOPEN", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "HP", href: '#'},
            ] 
        },
        { 
            header: { text: '17" - 21"', href: "#"},
            content: [
                { text: "AOC", href: '#'},
                { text: "ACER", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "Philips", href: '#'},
                { text: "Dell", href: '#'},
                { text: "LG", href: '#'},
            ] 
        },
        { 
            header: { text: '21" - 24"', href: "#"},
            content: [
                { text: "AOC", href: '#'},
                { text: "ACER", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "Philips", href: '#'},
                { text: "BenQ", href: '#'},
                { text: "Lenovo", href: '#'},
            ] 
        },
        { 
            header: { text: '24" - 27"', href: "#"},
            content: [
                { text: "AOC", href: '#'},
                { text: "ACER", href: '#'},
                { text: "Apple", href: '#'},
                { text: "ASUS", href: '#'},
                { text: "Samsung", href: '#'},
                { text: "HP", href: '#'},
            ] 
        },
    ] 
    const peripheralsDropdown : IDropdownElement[] = [
        { 
            header: { text: 'Мишки', href: "#"},
            content: [
                { text: "Logitech", href: '#'},
                { text: "COUGAR", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Canyon", href: '#'},
                { text: "SteelSeries", href: '#'},
                { text: "Trust", href: '#'},
                { text: "Corsair", href: '#'},
                { text: "A4TECH", href: '#'},
            ] 
        },
        { 
            header: { text: 'Клавиатури', href: "#"},
            content: [
                { text: "Logitech", href: '#'},
                { text: "COUGAR", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Canyon", href: '#'},
                { text: "SteelSeries", href: '#'},
                { text: "Trust", href: '#'},
                { text: "Corsair", href: '#'},
                { text: "A4TECH", href: '#'},
            ] 
        },
        { 
            header: { text: 'Слушалки', href: "#"},
            content: [
                { text: "Apple", href: '#'},
                { text: "Sony", href: '#'},
                { text: "JBL", href: '#'},
                { text: "Logitech", href: '#'},
                { text: "Hama", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Canyon", href: '#'},
                { text: "COUGAR", href: '#'},
            ] 
        },
        { 
            header: { text: 'Микрофони', href: "#"},
            content: [
                { text: "Logitech", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Trust", href: '#'},
                { text: "Kingston", href: '#'},
                { text: "Hama", href: '#'},
                { text: "A4TECH", href: '#'},
            ] 
        },
        { 
            header: { text: 'Уеб камери', href: "#"},
            content: [
                { text: "Logitech", href: '#'},
                { text: "Microsoft", href: '#'},
                { text: "Razer", href: '#'},
                { text: "Canyon", href: '#'},
                { text: "Trust", href: '#'},
                { text: "A4TECH", href: '#'},
            ] 
        },
    ]

    const handleMenuClick : MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        console.log('click');
        if(!isStatic) {
            setToggleDropdown(toggleDropdown => !toggleDropdown);
        }
    }


    return <header className={`${openSans.className} ${styles.header} ${!isStatic ? styles.active : ''}`}>
        <div className={`container ${styles.headerContent}`}>
            <div className={styles.navTopRow}>
                <Link href='/' className={styles.title}><h1>PCstar</h1></Link>
                <form className={styles.searchBox}>
                    <input type='text'/>
                </form>
                <ul className={styles.userMenu}>
                    <li><Link href="#">Профил</Link></li>
                    <li><Link href="#">Любими</Link></li>
                    <li><Link href="#">Количка</Link></li>
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
                    {
                        toggleDropdown && <ul className={styles.megaMenuOptions}>
                            <MenuOption iconURL="/icons/desktop-pc.png" link='#' text="Компютри и компоненти" dropdownList={computerItems} alt="computer icon"/>
                            <MenuOption iconURL="/icons/laptop.png" link='#' text="Лаптопи и компоненти" dropdownList={laptopDropdown} alt="laptop icon"/>
                            <MenuOption iconURL="/icons/monitor.png" link='#' text="Монитори" dropdownList={monitorDropdown} alt="monitor icon"/>
                            <MenuOption iconURL="/icons/ram.png" link='#' text="Аксесоари и периферия" dropdownList={peripheralsDropdown} alt="ram icon"/>
                            <MenuOption iconURL="/icons/printer.png" link='#' text="Принтери и консумативи" alt="printer icon"/>
                            <MenuOption iconURL="/icons/mobile-phone.png" link='#' text="Смартфони и таблети" alt="smartphone icon"/>
                            <MenuOption iconURL="/icons/tv.png" link='#' text="TV, аудио и видео" alt="tv icon"/>
                            <MenuOption iconURL="/icons/software.png" link='#' text="Софтуер" alt="software icon"/>
                            <MenuOption iconURL="/icons/wifi-router.png" link='#' text="Мрежово оборудване" alt="router icon"/>       
                        </ul>
                    }
                </nav>
                <nav className={styles.offerNav}>
                    <ul>
                        <li className={styles.navEl}><Link href="#">Промоции</Link></li>
                        <li className={styles.navEl}><Link href="/test">Магазини</Link></li>
                        <li className={styles.navEl}><Link href="/about">За нас</Link></li>
                        <li className={styles.navEl}><Link href="/contacts">Контакти</Link></li>
                    </ul>
                </nav>
            </div> 
        </div>
    </header>
}

export default Header;