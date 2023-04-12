import { Category } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ItemSideMenu.module.scss';

const findHref = (searchParams : string, tag: string, category : Category) => {
    if(searchParams) {
        let searchArr  = searchParams.split(',');
    
        let index = searchArr.indexOf(tag);
    
        if(index !== -1) searchArr.splice(index, 1);
        else searchArr.push(tag);

        if(searchArr.length == 0) return `/catalog${category.category}`;
        return `/catalog${category.category}?query=${searchArr.join(',')}`;
    } 

    return `/catalog${category.category}?query=${tag}`;
}

const ItemSideMenu = (
        {category, searchParams} : 
        {category: Category, searchParams : string}
    ) => {


    return <aside className={styles.sideMenuContainer}>
        <ul className={styles.tagList}>
            {
            category.tags.map((tag, idx) => {
                return (
                    <li className={styles.tagElement} key={idx} >
                        <Link className={styles.tagContent} href={findHref(searchParams, tag, category)}>
                            <div className={styles.checkContainer}>
                                <Image loading='eager' src={searchParams?.split(',').includes(tag) ? '/icons/misc/checked.png' : '/icons/misc/unchecked.png'} alt='checkbox' fill={true} sizes="1.2em"/>
                            </div>
                            <span className={styles.tagText}>{tag}</span>
                        </Link>
                    </li>
                )
            })
            }
        </ul>
    </aside>
}

export default ItemSideMenu;