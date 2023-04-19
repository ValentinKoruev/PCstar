import Link from 'next/link';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
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
                    <div className={styles.socialsContainer}>
                        <div className={styles.socialsCol}>
                            <span className={styles.socialsText}>PCstar ООД<br/>Последвайте ни и на:</span>
                            <ul className={styles.socialsList}>
                                <li className={styles.socialsItem}>
                                    <a className={styles.facebookIcon} href='#' aria-label='Go to facebook page'> 
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="100%" height="100%"><path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z"/></svg>
                                    </a>
                                </li>
                                <li className={styles.socialsItem}>
                                    <a className={styles.twitterIcon} href='#' aria-label='Go to twitter page'> 
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="100%" height="100%"><path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                                    </a>
                                </li>
                                <li className={styles.socialsItem}>
                                    <a className={styles.instagramIcon} href='#' aria-label='Go to instagram page'> 
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="100%" height="100%"><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/></svg>
                                    </a>
                                </li>
                                <li className={styles.socialsItem}>
                                    <a className={styles.youtubeIcon} href='#' aria-label='Go to youtube page'> 
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100%" height="100%"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.innerNavContainer}>
                        <div className={styles.navList}>
                            <p className={styles.navHeading}>Категории</p>
                            <ul className={styles.navLinks}>
                                <li><Link href='/catalog/computers'>Компютри и компоненти</Link></li>
                                <li><Link href='/catalog/laptops'>Лаптопи и компоненти</Link></li>
                                <li><Link href='/catalog/monitors'>Монитори</Link></li>
                                <li><Link href='/catalog/peripherals'>Аксесоари и периферия</Link></li>
                                <li><Link href='/catalog/printers'>Принтери и консумативи</Link></li>
                                <li><Link href='/catalog/smartphones'>Смартфони и таблети</Link></li>
                                <li><Link href='/catalog/tv-video-photo'>ТV, фото и видео</Link></li>
                                <li><Link href='/catalog/software'>Софтуер</Link></li>
                                <li><Link href='/catalog/networks'>Мрежово оборудване</Link></li>
                            </ul>
                        </div>
                        <div className={styles.navList}>
                            <p className={styles.navHeading}>За клиента</p>
                            <ul className={styles.navLinks}>
                                <li><Link href='#'>Често задавани въпроси</Link></li>
                                <li><Link href='#'>Общи условия</Link></li>
                                <li><Link href='#'>Ръководства за употреба</Link></li>
                                <li><Link href='#'>Начини на плашане</Link></li>
                                <li><Link href='#'>Ремонт на техника</Link></li>
                                <li><Link href='#'>Доставка на поръчка</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={styles.copyrightContainer}>
                <span>Сайтът е направен с учебна цел и не е предназначен за комерсиална употреба</span>
            </div>
        </footer>
    );
}

export default Footer;