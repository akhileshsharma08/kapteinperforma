import mongoose from "mongoose";

const { Schema } = mongoose;

const QuotationSchema = new Schema(
  {
    companyDetails: {
      firmName: String,
      supplyPlace: String,
      gstNumber: String,
      email: String,
      contact: String,
    },
    itemDetails: [
      {
        itemName: String,
        qty: Number,
        rate: Number,
      },
    ],
    brand: String,
    handlingFee: Number,
  },
  { timestamps: true }
);

const Quotation =
  mongoose.models.Quotation || mongoose.model("Quotation", QuotationSchema);

export default Quotation;
