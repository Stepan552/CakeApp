import { configureStore } from "@reduxjs/toolkit";
import mode from "./Slices/modeSlice";
import filter from "./Slices/filterSlice";
import cake from "./Slices/cakeSlice";
import basket from "./Slices/basketSlice";

const store = configureStore({
  reducer: { mode, filter, cake, basket },
});

export default store;
