import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    orderedGoods: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Order", orderSchema);
