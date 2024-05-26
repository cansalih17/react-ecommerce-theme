import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
};

export const getProductDetailFunc = createAsyncThunk(
  "getProductDetailFunc",
  async (id) => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/cansalih17/ecommerce-api/main/api.json`
    );
    return response.data.find((item) => item.id == id);
  }
);

const getProductDetailSlice = createSlice({
  name: "getProductDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetailFunc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProductDetailFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(getProductDetailFunc.rejected, (state) => {
      state.loading = false;
      state.error = "error fetching product data";
    });
  },
});

export default getProductDetailSlice.reducer;
