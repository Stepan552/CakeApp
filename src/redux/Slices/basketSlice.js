import { createSlice } from "@reduxjs/toolkit";
import {
  receiveItemsFromStorage,
  receiveTotalPriceFromStorage,
} from "../../utils/basket";

const initialState = {
  items: receiveItemsFromStorage(),
  totalPrice: receiveTotalPriceFromStorage(),
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const currentGood = state.items.find(
        (item) => item.title === action.payload.title
      );

      if (currentGood) {
        currentGood.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    decrease(state, action) {
      const currentGood = state.items.find(
        (item) => item.title === action.payload
      );
      currentGood.count--;
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    increase(state, action) {
      const currentGood = state.items.find(
        (item) => item.title === action.payload
      );
      currentGood.count++;
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.title !== action.payload);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});
export const {
  addItem,
  removeItem,
  clearItems,
  increase,
  decrease,
  setItems,
  setTotalPrice,
} = basketSlice.actions;
export default basketSlice.reducer;
