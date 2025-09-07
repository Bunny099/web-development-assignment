import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"


export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const city = searchParams.get("city") || undefined;
        const state = searchParams.get("state") || undefined;
        const name = searchParams.get("name") || undefined;

        const schoolData = await prisma.school.findMany(
            {
                where: {
                    city,
                    state,
                    name: name ? { contains: name } : undefined
                }
            }
        );
        return NextResponse.json({ schoolData }, { status: 202 })
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch school data" })
    }
}
export async function POST(req: NextRequest) {

    try {
        const body = await req.json()
        const { name, address, city, state, contact, email, image } = body;
        if (!name || !address || !city || !state || !contact || !email || !image) {
            return NextResponse.json({ error: "All field are required" }, { status: 203 })
        }
        const res = await prisma.school.create({
            data: {
                name, city, email, address, image, contact, state
            }
        })
        return NextResponse.json(res)

    } catch (error) {
        return NextResponse.json({ error: "Some server error" }, { status: 500 })


    }

}