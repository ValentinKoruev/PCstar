import { prisma } from "@server/db/client"

import styles from './page.module.scss'
import Item from "@components/UI/Item"
import ItemShowList from "@components/UI/ItemShowList"
import { ItemType } from "@components/UI/ItemShowList/ItemShowListComponent/ItemShowList"
export default async function Promo() {
    
    
    const items = await prisma.item.findMany({ 
        where: {
            NOT:{ 
                prevPrice: {
                    equals: null
                }
            }
        },
        select: {
            id: true,
            title: true,
            price: true,
            prevPrice: true,
            imageSrc: true,
            tags: true
        }
    })
    
    return (
        <main className={`container ${styles.mainContainer}`}>
            <ItemShowList title={"Промоции"} items={items as Array<ItemType>} elements={3}/>
        </main>
    )
}
  