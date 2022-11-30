import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Cake", cakeSchema);
