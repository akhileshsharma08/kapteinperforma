import { NextResponse } from "next/server";

const { default: Inventory } = require("@/app/models/quotation");
const { default: connectMongoDb } = require("@/app/utils/connection");

// get all the stocks from the inventory
export async function GET() {
  await connectMongoDb();
  const stocks = await Inventory.find();
  return NextResponse.json({ stocks });
}

// Post the product to the inventory

export async function POST(request) {
  const {
    productName,
    productCode,
    productDescription,
    supplier,
    color,
    category,
    quantity,
    sellQuantity,
    price,
    sellPrice,
    delivered,
    packed,
    shipped,
  } = await request.json();
  await connectMongoDb();
  await Inventory.create({ productName,
    productCode,
    productDescription,
    supplier,
    color,
    category,
    quantity,
    sellQuantity,
    price,
    sellPrice,
    delivered,
    packed,
    shipped, });
  return NextResponse.json({ message: "product added" }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Inventory.findByIdAndDelete(id);
  return NextResponse.json({ message: "product delete" }, { status: 200 });
}
