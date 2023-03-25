import Link from 'next/link';
import Image from 'next/image';
import styles from './ItemList.module.scss'; 

export interface IItem {
    title: string,
    image: { src: string, alt: string },
    price: number,
    link: string
}

const ItemList = ({items} : {items: Array<IItem>}) => {
    return <ul className={styles.itemListContainer}>
        {
            items.map((item, idx) => {
                return (
                    <li key={idx} className={styles.itemCard}>
                        <Link className={styles.linkContainer} href={item.link}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div className={styles.imageContainer}>
                                <Image src={item.image.src} alt={item.image.alt} fill={true}/>
                            </div>
                        </Link>
                        <div className={styles.priceBuyContainer}>
                            <span className={styles.price}>{item.price.toFixed(2)} лв.</span>
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