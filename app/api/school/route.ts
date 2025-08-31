import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"


export async function GET() {
    try {
        const schoolData = await prisma.school.findMany();
        return NextResponse.json({ schoolData })
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch school data" })
    }
}
export function POST(req: NextRequest, res: NextResponse) {

}