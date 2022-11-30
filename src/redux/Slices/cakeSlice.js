import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCakesAndSave = createAsyncThunk(
  "cake/getCakes",
  async (params) => {
    const { data } = await axios.get(
      `https://635144badfe45bbd55bb6c8e.mockapi.io/cakes?title=${params.searchValue}`
    );
    return data;
  }
);
const initialState = {
  cakes: [],
  status: "pending",
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setCakes(state, action) {
      state.cakes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCakesAndSave.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getCakesAndSave.rejected, (state, action) => {
      state.status = "rejected";
      console.error(action.payload);
    });
    builder.addCase(getCakesAndSave.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.cakes = action.payload;
    });
  },
});

export const { setCakes } = cakeSlice.actions;

export default cakeSlice.reducer;
