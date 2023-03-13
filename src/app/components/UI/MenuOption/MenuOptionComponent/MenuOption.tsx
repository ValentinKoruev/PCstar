import styles from './MenuOption.module.scss';

interface IMenuOption {
    iconURL: string,
    text: string
}


const MenuOption = ({iconURL, text} : IMenuOption) => {
    return <div className={styles.menuContainer}>
        
    </div>
}

export default MenuOption;