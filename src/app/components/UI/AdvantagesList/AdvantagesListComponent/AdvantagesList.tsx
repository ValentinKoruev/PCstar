import Image from 'next/image';
import styles from './AdvantagesList.module.scss';

const AdvantagesList = () => {

    const data : Array<{text: string, iconSrc: string}> = [
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/delivery-truck.png'},
        { text: "14 дни право на връщане", iconSrc: '/icons/advantages/14-days.png'},
        { text: "Гаранционен и извънгаранционен сервиз", iconSrc: '/icons/advantages/tools.png'},
        { text: "Изплащане на лизинг", iconSrc: '/icons/advantages/pay-with-hand.png'},
        { text: "Проверка преди плащане", iconSrc: '/icons/advantages/check.png'}
    ]


    return (
        <section className={`container ${styles.advantagesContainer}`}>
            <ul className={styles.advantagesList}>
                {
                    data.map((element, idx) => {
                        return (
                            <li key={idx} className={styles.advantagesElement}>
                                <div className={styles.imageContainer}>
                                    <Image loading='eager' src={element.iconSrc} alt={element.text} fill={true}
                                        sizes="
                                        32px
                                        "
                                    />
                                </div>
                                <span className={styles.text}>{element.text}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    )
}

export default AdvantagesList;