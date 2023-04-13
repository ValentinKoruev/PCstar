import { prisma } from "@server/db/client";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    const { offerId } = await request.json();
    
    try {
        const topOffer = await prisma.topOffer.create({
            data: {
                item: {
                    connect: {
                        id: offerId
                    }
                }
            }
        })

        return NextResponse.json(topOffer, {
            status: 200
        })  
    } catch(err) {
        return NextResponse.json(err, {
            status: 500
        })
    } 
}

export async function GET(request: Request) {

    try {
        const topOffer = await prisma.topOffer.findFirst({
            include: {
                item: true
            }
        })
        

        return NextResponse.json(topOffer, {
            status: 200
        })  
    } catch(err) {
        return NextResponse.json(err, {
            status: 500
        })
    } 
}