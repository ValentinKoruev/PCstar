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

    
    
    const getTags = (items : Array<ItemType>)  => {
        
        const tagMap = new Map();
        for(let item of items) {
            if(!item.tags) continue;
            let tag = item.tags[0];
            if(!tag) continue;
            if (tagMap.get(tag)) {
            tagMap.set(tag, tagMap.get(tag) + 1)
            } else {
                tagMap.set(tag, 1);
            }
        }
        
        if(tagMap.size === 0) return undefined;
        return tagMap; 

    }


    const isValidQuery = (query : string | null) => {
        
        if(query === null) return false;
        return tags?.includes(query);
    }

    const [itemsFiltered, setItemsFitered] = useState<Array<ItemType>>(isValidQuery(query) ? items.filter((item) => item.tags?.includes(query as string)) : [...items]);
    const [tagsFilter, setTagsFilter] = useState<Array<string>>(isValidQuery(query) ? [query as string] : []);
    const [sortFilter, setSortFilter] = useState<boolean>(true); // true = descending, false = ascending
    const [filterDropdown, setFilterDropdown] = useState<boolean>(false);

    useEffect(() => {
        setTagsFilter(isValidQuery(query) ? [query as string] : []);
        setItemsFitered(isValidQuery(query) ? items.filter((item) => item.tags?.includes(query as string)) : [...items]);
    }, [query])

    const handleFilterShowClick = () => {
        
        if(window.innerWidth < 868) {
            setFilterDropdown(!filterDropdown);
        }
    }

    const handleTagFilterClick = (tag: string) => {
        let newTagsFilter : Array<string>;
        if (tagsFilter.includes(tag)) 
        newTagsFilter = tagsFilter.filter((tagFilter) => tagFilter !== tag)
        else newTagsFilter = [...tagsFilter, tag];

        setTagsFilter(newTagsFilter);

        if (newTagsFilter.length === 0) setItemsFitered(items);
        else setItemsFitered(items.filter(
            (item) => item.tags?.some(tag => newTagsFilter.includes(tag))
        )); 
    }
    
    const handleSortFilterClick = (sort: boolean) => {
        // true = descending, false = ascending
        setSortFilter(sort);
    }
    const tagItems = getTags(items);
    return (
        <>
            <h1 className={styles.categoryTitle}>{title}</h1>
            <section className={styles.itemsSection}>
                <aside className={styles.sideMenuContainer}>
                    <div className={styles.sideMenuTitleContainer}>
                        <span className={styles.sideMenuTitle} onClick={() => handleFilterShowClick()}>
                            Филтри
                        </span>
                    </div>
                    <div className={`${styles.sideMenuContent} ${filterDropdown ? `${styles.active}` : ''}`}>
                        {
                           tagItems && <div className={styles.filterContainer}>
                                <span className={styles.filterTitle}>Тагове</span>
                                <ul className={styles.tagList}>
                                {
                                    Array.from(tagItems).sort((a,b) => a[0].localeCompare(b[0])).map((tag, idx) => {
                                        return (
                                            <li className={styles.tagElement} key={idx} >
                                                <button onClick={() => handleTagFilterClick(tag[0])}>
                                                    <Image src={tagsFilter.includes(tag[0]) ? '/icons/misc/checked.png' : '/icons/misc/unchecked.png'} alt="check icon" width={24} height={24}/>
                                                    <span>{`${tag[0]} (${tag[1]})`}</span>
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
                    </div>
                </aside>
                <div className={styles.itemsContainer}>
                    <ul className={styles.itemList}>
                        {
                            itemsFiltered.length > 0 ?
                                [...itemsFiltered]
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