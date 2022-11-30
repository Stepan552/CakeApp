import cakeModel from "../models/cakeModel.js";

export const getCakes = async (req, res) => {
  try {
    const cakes = cakeModel.find();
    if (!cakes) {
      return res.status(404).json({
        message: "Не знайдено",
      });
    }
    res.json(cakes);
  } catch (err) {
    res.status(500).json({
      message: "Не вдалося отримати товари",
    });
  }
};
