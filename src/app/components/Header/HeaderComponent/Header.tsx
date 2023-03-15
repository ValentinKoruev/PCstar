import MenuOption from '@components/UI/MenuOption';

import styles from './Header.module.scss'

const Header = () => {
    return <header className={`container ${styles.header}`}>
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
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <ul className={styles.sideNav}>
                        {/* <li>Категории</li> */}
                        {/* <li><a href="#">Компютри</a></li>
                        <li><a href="#">Лаптопи</a></li>
                        <li><a href="#">Компоненти</a></li>
                        <li><a href="#">Монитори</a></li>
                        <li><a href="#">Принтери и скенери</a></li>
                        <li><a href="#">Проектори</a></li> */}
                        
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                        <li>
                            <MenuOption iconURL="/icons/monitor.png" text="Компютри" alt="monitor icon"/>
                        </li>
                       </ul>
                </li>
                <li><a href="#">Промоции</a></li>
                <li><a href="#">Магазини</a></li>
                <li><a href="#">За нас</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;