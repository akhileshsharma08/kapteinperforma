import mongoose, { Schema } from "mongoose";

const QuotationSchema = new Schema(
  {
    itemName: String,
    firmName: String,
    supplyPlace: String,
    qty: Number,
    rate: Number,
    gstNumber: Number,
    email: Number,
    contact: Boolean,
    brand: Boolean,
    handelingFee: Boolean,
  },
  { timestamps: true }
);

const Inventory =
  mongoose.models.Inventory || mongoose.model("Quotation", QuotationSchema);

export default Inventory;
