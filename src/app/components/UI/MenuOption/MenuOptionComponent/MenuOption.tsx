import Image from 'next/image';
import Link from 'next/link';
import styles from './MenuOption.module.scss';

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
    children?: JSX.Element
}


const MenuOption = ({iconURL, link, text, alt, dropdownList, children} : IMenuOption) => {
    return (
        <li className={styles.menuContainer}>
            <Link href={link} className={styles.link}>
                <div className={styles.iconWrapper}>
                    <Image fill={true} src={iconURL} alt={alt} loading={'eager'}/>
                </div>
                {text}
                <svg className={styles.svg} fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
                </svg>
            </Link>
            <div className={styles.menuDropdownContainer}>
                <div className={styles.whiteSpace}></div>
                <div className={styles.dropdownContent}>
                    {
                        dropdownList && <> {dropdownList.map((element, key) => {
                            return <div className={styles.dropdownListContainer} key={key}>
                                <span className={styles.dropdownListHeader}><Link href={element.header.href}>{element.header.text}</Link></span>
                                <ul className={styles.dropdownList}>
                                    <> {
                                        element.content.map((contentEl, key) => {
                                            return <li className={styles.dropdownListElement} key={key}><Link href={contentEl.href}>{contentEl.text}</Link></li>
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