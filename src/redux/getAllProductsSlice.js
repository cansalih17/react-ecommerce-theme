import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
};

export const getAllProductsFunc = createAsyncThunk(
  "getAllProductsFunc",
  async () => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/cansalih17/ecommerce-api/main/api.json`
    );
    return response.data;
  }
);

const getAllProductsSlice = createSlice({
  name: "getAllProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsFunc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllProductsFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(getAllProductsFunc.rejected, (state) => {
      state.loading = false;
      state.error = "error fetching product data";
    });
  },
});

export default getAllProductsSlice.reducer;
