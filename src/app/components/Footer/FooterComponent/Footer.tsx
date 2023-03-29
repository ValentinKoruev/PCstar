import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import styles from './Footer.module.scss';

const openSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['cyrillic'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})


const Footer = () => {
    return (
        <footer className={`${openSans.className} ${styles.footer}`}>
            <div className={styles.newsletterContainer}>
                <form className={`container ${styles.newsletterForm}`}>
                    <span className={styles.newsText}>Абонирай се за бъдещи промоции и оферти!</span>
                    <div className={styles.inputContainer}>
                        <input className={styles.textField} placeholder="Вашият имейл" type="text" />
                        <div className={styles.submitButtonContainer}>
                            <input className={styles.submitButton} value="Абонирай се!" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
            <nav className={styles.footerNav}>
                <div className={`container ${styles.navListsContainer}`}>
                    <ul className={styles.navList}>
                        <li><Link href='#'>Компютри</Link></li>
                        <li><Link href='#'>Компютри</Link></li>
                        <li><Link href='#'>Компютри</Link></li>
                        <li><Link href='#'>Компютри</Link></li>
                        <li><Link href='#'>Компютри</Link></li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;