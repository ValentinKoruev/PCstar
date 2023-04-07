'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './MenuOption.module.scss';
import { MouseEventHandler, useState } from 'react'

export interface IDropdownElement {
    header: { text: string, href: string},
    content: Array<{text: string, href: string}>
}

export interface IMenuOption {
    iconURL: string,
    link: string,
    text: string,
    alt: string,
    dropdownList?: Array<IDropdownElement>,
    children?: JSX.Element,
    setDropdown: (state: boolean) => void,
    isStatic: boolean
}


const MenuOption = ({iconURL, link, text, alt, dropdownList, setDropdown, isStatic} : IMenuOption) => {
    const [subDropdown, setSubDropdown] = useState<boolean>(false);
    
    const handleDropdownClick = () => {
        console.log('anchor clicked')

        setDropdown(false);
    }

    const handleCategoryClick : MouseEventHandler<HTMLElement> = (e) => {
        e.preventDefault();

        if(window.innerWidth < 768) setSubDropdown(subDropdown => !subDropdown);
    }

   
    return (
        <li onClick={handleCategoryClick} className={styles.menuContainer}>
            <div className={styles.categoryContainer}>
                <div className={styles.iconWrapper}>
                    <Image fill={true} src={iconURL} alt={alt} loading={'eager'} sizes="24px"/>
                </div>
                {text}
                <svg className={styles.svg} fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                </svg>
            </div>
            <div className={`${styles.menuDropdownContainer} ${subDropdown ? styles.active : ''}`}>
                <div className={styles.whiteSpace}></div>
                <div className={styles.dropdownContent}>
                    {
                        dropdownList && <> {dropdownList.map((element, key) => {
                            return <div className={styles.dropdownListContainer} key={key}>
                                <span onClick={handleDropdownClick} className={styles.dropdownListHeader}><Link href={element.header.href}>{element.header.text}</Link></span>
                                <ul className={styles.dropdownList}>
                                    <> {
                                        element.content.map((contentEl, key) => {
                                            return <li onClick={handleDropdownClick} className={styles.dropdownListElement} key={key}><Link href={contentEl.href}>{contentEl.text}</Link></li>
                                        })
                                    }
                                    </>
                                </ul>
                            </div>
                        })
                    }</>
                    }  
                </div>
            </div>
        </li>
    );
}
export default MenuOption;