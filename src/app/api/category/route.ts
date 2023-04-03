import { prisma } from "@server/db/client";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    const { name, title, parent, category } = await request.json();
    
    try {
        const categoryDoc = await prisma.category.create({
            data: {
                name, 
                title,
                parent,
                category
            }
        })

        return NextResponse.json(categoryDoc, {
            status: 200
        })  
    } catch(err) {
        return NextResponse.json(err, {
            status: 500
        })
    } 
}