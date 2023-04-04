import { Category } from '@prisma/client';
import Link from 'next/link';
import styles from './ItemSideMenu.module.scss';


const ItemSideMenu = ({category} : {category: Category}) => {


    return <aside>
        {
        category.tags.map((tag, idx) => {
            return <Link key={idx} href={`/catalog/${category.category}?query=${tag}`}>{tag}</Link>
        })
        }
    </aside>
}

export default ItemSideMenu;