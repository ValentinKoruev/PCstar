import Link from 'next/link';
import Image from 'next/image';

import styles from './Item.module.scss'


export interface IItem {
    title: string,
    image: { src: string, alt: string },
    price: number,
    prevPrice?: number,
    link: string,
    idx?: number,
    elements?: number
}

const getElementsClass = (elements : number) => {
    switch(elements) {
        case 2: return styles.row2;
        case 3: return styles.row3;
        case 4: return styles.row4;
        case 5: return styles.row5;
        case 6: return styles.row6;
        default: return '';
    }
}



const Item = ({title, image, price, prevPrice, link, idx, elements=1} : IItem) => {
    return (
        <li key={idx} className={`${styles.itemCard} ${getElementsClass(elements)}`}>
            <Link className={styles.linkContainer} href={link}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.imageContainer}>
                    <Image src={image.src} alt={image.alt} fill={true}/>
                </div>
            </Link>
            <div className={styles.priceBuyContainer}>
                <div className={styles.priceContainer}>
                    {prevPrice && <span className={styles.prevPrice}>{prevPrice.toFixed(2)} лв.</span>}
                    <span className={styles.price}>{price.toFixed(2)} лв.</span>
                </div>
                <Link href={link} className={styles.button}>
                    Виж Още
                </Link>
            </div>
        </li>
    )
}

export default Item;