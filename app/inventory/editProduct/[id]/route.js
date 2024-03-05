import { NextResponse } from "next/server";
import Inventory from "@/app/models/quotation";
import connectMongoDb from "@/app/utils/connection";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
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

    const updatedStock = await Inventory.findByIdAndUpdate(id, {
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
    });

    if (!updatedStock) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product Updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// get the specific api data
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const stock = await Inventory.findOne({ _id: id });
    if (!stock) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ stock }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
