'use client'

import Image from 'next/image';
import Item from '@components/UI/Item/ItemComponent/Item';
import styles from './ItemShowList.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export type ItemType = {
    id: string,
    title: string,
    price: number,
    prevPrice?: number,
    imageSrc: string,
    tags?: Array<string>,
}


const ItemShowList = ({items, title, tags, elements} : {items : Array<ItemType>, title: string, tags?: Array<string>, elements: number}) => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const isValidQuery = (query : string | null) => {
        
        if(query === null) return false;
        
        return tags?.includes(query);
    }

    const [itemsFiltered, setItemsFitered] = useState<Array<ItemType>>(isValidQuery(query) ? items.filter((item) => item.tags?.includes(query as string)) : items);
    const [tagsFilter, setTagsFilter] = useState<Array<string>>(isValidQuery(query) ? [query as string] : []);
    const [sortFilter, setSortFilter] = useState<boolean>(true); // true = descending, false = ascending

    useEffect(() => {
        setTagsFilter(isValidQuery(query) ? [query as string] : []);
        setItemsFitered(isValidQuery(query) ? items.filter((item) => item.tags?.includes(query as string)) : items);
    }, [query])


    const handleTagFilterClick = async (tag: string) => {
        let newTagsFilter : Array<string>;
        if (tagsFilter.includes(tag)) newTagsFilter = tagsFilter.filter((tagFilter) => tagFilter !== tag)
        else newTagsFilter = [...tagsFilter, tag];

        setTagsFilter(newTagsFilter);

        if (newTagsFilter.length === 0) setItemsFitered(items);
        else setItemsFitered(items.filter((item) => item.tags?.some(tag => newTagsFilter.includes(tag)))); 
    }
    
    const handleSortFilterClick = (sort: boolean) => {
        // true = descending, false = ascending
        setSortFilter(sort);
    }
    return (
        <>
            <h1 className={styles.categoryTitle}>{title}</h1>
            <section className={styles.itemsSection}>
                <aside className={styles.sideMenuContainer}>
                    <span className={styles.sideMenuTitle}>Филтри</span>
                    {
                        tags && <div className={styles.filterContainer}>
                            <span className={styles.filterTitle}>Производител</span>
                            <ul className={styles.tagList}>
                            {
                                tags.map((tag, idx) => {
                                    return (
                                        <li className={styles.tagElement} key={idx} >
                                            <button onClick={() => handleTagFilterClick(tag)}>
                                                <Image src={tagsFilter.includes(tag) ? '/icons/misc/checked.png' : '/icons/misc/unchecked.png'} alt="check icon" width={24} height={24}/>
                                                <span>{tag}</span>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    }  
                    <div className={styles.filterContainer}>
                        <span className={styles.filterTitle}>Сортиране</span>
                        <ul>
                            <li>
                                <button onClick={() => handleSortFilterClick(true)}>
                                    <Image src={sortFilter ? '/icons/misc/checked.png' : '/icons/misc/unchecked.png'} alt="check icon" width={24} height={24}/>
                                    <span>Намаляващ ред</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleSortFilterClick(false)}>
                                    <Image src={!sortFilter ? '/icons/misc/checked.png' : '/icons/misc/unchecked.png'} alt="check icon" width={24} height={24}/>
                                    <span>Нарастващ ред</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className={styles.itemsContainer}>
                    <ul className={styles.itemList}>
                        {
                            itemsFiltered.length > 0 ?
                                itemsFiltered
                                .sort((a, b) => sortFilter ? b.price - a.price : a.price - b.price)
                                .map((item, idx) => {
                                    return <Item key={idx} title={item.title} image={{src: item.imageSrc, alt: item.title}} price={item.price} prevPrice={item.prevPrice ? item.prevPrice : undefined} link={`/products/${item.id}`} idx={idx} elements={elements}/>
                                }) 
                            :
                            <span className={styles.noProducts}>Не бяха намерени продукти</span>
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ItemShowList;