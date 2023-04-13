'use client'

import Item from '@components/UI/Item/ItemComponent/Item';
import styles from './ItemShowList.module.scss';
import { useState } from 'react';

export type ItemType = {
    id: string,
    title: string,
    price: number,
    prevPrice?: number,
    imageSrc: string,
    tags: Array<string>
}


const ItemShowList = ({items, title, tags, elements} : {items : Array<ItemType>, title: string, tags: Array<string>, elements: number}) => {
    const [itemsFiltered, setItemsFitered] = useState<Array<ItemType>>(items);
    const [tagsFilter, setTagsFilter] = useState<Array<string>>([]);
    const [sortFilter, setSortFilter] = useState<boolean>(true); // true = descending, false = ascending

    const handleTagFilterClick = async (tag: string) => {
        let newTagsFilter : Array<string>;
        if (tagsFilter.includes(tag)) newTagsFilter = tagsFilter.filter((tagFilter) => tagFilter !== tag)
        else newTagsFilter = [...tagsFilter, tag];

        setTagsFilter(newTagsFilter);

        if (newTagsFilter.length === 0) setItemsFitered(items);
        else setItemsFitered(items.filter((item) => item.tags.some(tag => newTagsFilter.includes(tag)))); 
    }
    
    const handleSortFilterClick = (sort: boolean) => {
        // true = descending, false = ascending
        setSortFilter(sort);
    }
    return (
        <section className={styles.itemsSection}>
            <aside className={styles.sideMenuContainer}>
                <ul className={styles.tagList}>
                    {
                    tags.map((tag, idx) => {
                        return (
                            <li className={styles.tagElement} key={idx} >
                                <button onClick={() => handleTagFilterClick(tag)}>{tag}</button>
                            </li>
                        )
                    })
                    }
                </ul>
                <ul>
                    <li>
                        <button onClick={() => handleSortFilterClick(false)}>Ascending order</button>
                    </li>
                    <li>
                        <button onClick={() => handleSortFilterClick(true)}>Descending order</button>
                    </li>
                </ul>
            </aside>
            <h1 className={styles.categoryTitle}>{title}</h1>
            <ul className={styles.itemList}>
                {
                    sortFilter ? 
                    itemsFiltered.sort((a, b) => b.price - a.price).map((item, idx) => {
                        return <Item key={idx} title={item.title} image={{src: item.imageSrc, alt: item.title}} price={item.price} prevPrice={item.prevPrice ? item.prevPrice : undefined} link={`/products/${item.id}`} idx={idx} elements={elements}/>
                    }) 
                    :
                    itemsFiltered.sort((a, b) => a.price - b.price).map((item, idx) => {
                        return <Item key={idx} title={item.title} image={{src: item.imageSrc, alt: item.title}} price={item.price} prevPrice={item.prevPrice ? item.prevPrice : undefined} link={`/products/${item.id}`} idx={idx} elements={elements}/>
                    }) 
                }
            </ul>
        </section>
    )
}

export default ItemShowList;