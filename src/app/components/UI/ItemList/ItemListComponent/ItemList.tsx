import Link from 'next/link';
import Image from 'next/image';
import styles from './ItemList.module.scss'; 
import Item, { IItem } from '@components/UI/Item';


const ItemList = ({items, className, elements} : {items: Array<IItem>, className?: string, elements: number}) => {
    
    

    return <ul className={`${className} ${styles.itemListContainer}`}>
        {
            items.map((item, idx) => {
                return (
                    <Item key={idx} title={item.title} image={item.image} price={item.price} prevPrice={item.prevPrice} link={item.link} idx={idx} elements={elements}/>
                )
            })
        }
    </ul>
}

export default ItemList;