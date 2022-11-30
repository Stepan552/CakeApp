import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getCakes } from "./constrollers/cakeController.js";
import { createOrder } from "./constrollers/orderController.js";
mongoose
  .connect(
    "mongodb://admin8866:admin886688@ac-jfy6npa-shard-00-00.owt9p7t.mongodb.net:27017,ac-jfy6npa-shard-00-01.owt9p7t.mongodb.net:27017,ac-jfy6npa-shard-00-02.owt9p7t.mongodb.net:27017/cake-system?ssl=true&replicaSet=atlas-9hpxf1-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("DB is failed with error", err));

const PORT = 5555;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/cakes", getCakes);
app.post("/orders", createOrder);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server connected to port ${PORT}`);
});
