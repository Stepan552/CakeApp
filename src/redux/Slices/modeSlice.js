import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
