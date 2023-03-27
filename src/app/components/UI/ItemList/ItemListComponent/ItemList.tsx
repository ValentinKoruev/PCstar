import Link from 'next/link';
import Image from 'next/image';
import styles from './ItemList.module.scss'; 

export interface IItem {
    title: string,
    image: { src: string, alt: string },
    price: number,
    prevPrice?: number,
    link: string
}


const ItemList = ({items, className, elements} : {items: Array<IItem>, className?: string, elements: number}) => {
    
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

    return <ul className={`${className} ${styles.itemListContainer}`}>
        {
            items.map((item, idx) => {
                return (
                    <li key={idx} className={`${styles.itemCard} ${getElementsClass(elements)}`}>
                        <Link className={styles.linkContainer} href={item.link}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.imageContainer}>
                                <Image src={item.image.src} alt={item.image.alt} fill={true}/>
                            </div>
                        </Link>
                        <div className={styles.priceBuyContainer}>
                            <div className={styles.priceContainer}>
                                {item.prevPrice && <span className={styles.prevPrice}>{item.prevPrice.toFixed(2)} лв.</span>}
                                <span className={styles.price}>{item.price.toFixed(2)} лв.</span>
                            </div>
                            <Link href={item.link} className={styles.button}>
                                Виж Още
                            </Link>
                        </div>
                    </li>
                )
            })
        }
    </ul>
}

export default ItemList;