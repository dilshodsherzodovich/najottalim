import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../../db/products";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  products: [...dataProducts],
  loading: false,
  res: {},
};

export const addNewProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const { request } = useHttp();
    return await request({
      method: "POST",
      url: "/products",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
