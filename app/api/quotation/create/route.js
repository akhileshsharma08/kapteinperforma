// import connectMongoDb from "@/app/libs/mongodb"
// import Quotation from "@/app/models/quotation"
import Quotation from "@/app/models/quotation"
import connectMongoDb from "@/app/utils/connection"
import { NextResponse } from "next/server"

export async function POST(request){
    const {quotationData} = await request.json()
    await connectMongoDb
    await Quotation.create({QuotationData})
    return NextResponse.json({message: "Quotation created"}, {status: 201})
}

export async function GET(){
    await connectMongoDb()
    const quotations = await Quotation.find()
    return NextResponse.json({quotations})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Quotation.findByIdAndDelete(id)
    return NextResponse.json({message: "Quotation deleted"}, {status: 200})
}
