import { prisma } from "@server/db/client"

import styles from './page.module.scss'
import ItemShowList, { ItemType } from "@components/UI/ItemShowList"
import { Metadata } from "next";

export const revalidate = 60; // revalidate this page every 60 seconds

export const metadata : Metadata = {
    title: 'Промоции - PCstar',
}

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
        <main className={`container ${styles.main}`}>
            <ItemShowList title={"Промоции"} items={items as Array<ItemType>} elements={3}/>
        </main>
    )
}
  