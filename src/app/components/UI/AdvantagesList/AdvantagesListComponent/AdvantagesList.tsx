import Image from 'next/image';
import styles from './AdvantagesList.module.scss';

const AdvantagesList = () => {

    const data : Array<{text: string, iconSrc: string}> = [
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/adv-tools.png'},
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/adv-tools.png'},
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/adv-tools.png'},
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/adv-tools.png'},
        { text: "Безплатна доставка до 24 часа", iconSrc: '/icons/advantages/adv-tools.png'}
    ]


    return (
        <section className={`container ${styles.advantagesContainer}`}>
            <ul className={styles.advantagesList}>
                {
                    data.map((element, idx) => {
                        return (
                            <li className={styles.advantagesElement}>
                                <div className={styles.imageContainer}>
                                    <Image src={element.iconSrc} alt={element.text} fill={true}/>
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