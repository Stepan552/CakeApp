import orderModel from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const doc = new orderModel({
      fullName: req.body.fullName,
      email: req.body.email,
      tel: req.body.tel,
      address: req.body.address,
      orderedGoods: req.body.orderedGoods,
    });
    const order = await doc.save();
    res.json({
      message: "success",
      ...order._doc,
    });
  } catch (err) {
    res.status(500).json({ message: "Виникла проблема із сервером" });
  }
};
