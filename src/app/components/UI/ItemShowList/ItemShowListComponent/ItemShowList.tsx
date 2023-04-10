import { Category } from '@prisma/client';
import { prisma } from '@server/db/client';
import Item from '@components/UI/Item/ItemComponent/Item';
import styles from './ItemShowList.module.scss';


const ItemShowList = async ({category, elements=3} : {category : Category, elements: number}) => {

    
    const items = await prisma.item.findMany({
        where: {
            categories: {
                has: category.category
            }, 
        }
    });



    return (
        <section className={styles.itemsSection}>
            <h1 className={styles.categoryTitle}>{category.title}</h1>
            <ul className={styles.itemList}>
                {items.map((item, idx) => {
                    return <Item key={idx} title={item.title} image={{src: item.imageSrc, alt: item.title}} price={item.price} prevPrice={item.prevPrice ? item.prevPrice : undefined} link={`/products/${item.id}`} idx={idx} elements={elements}/>
                })}
            </ul>
        </section>
    )
}

export default ItemShowList;