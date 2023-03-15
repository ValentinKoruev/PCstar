import Image from 'next/image';
import styles from './MenuOption.module.scss';

export interface IMenuOption {
    iconURL: string,
    text: string,
    alt: string,
}


const MenuOption = ({iconURL, text, alt} : IMenuOption) => {
    return <div className={styles.menuContainer}>
        <div className={styles.iconWrapper}>
            <Image fill={true} src={iconURL} alt={alt}/>
        </div>
        <span>{text}</span>
    </div>
}

export default MenuOption;