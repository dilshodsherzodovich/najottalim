import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataProducts } from "../../db/products";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  products: [...dataProducts],
  loading: false,
  res: {},
  editedProduct: {},
  editedLoading: true,
};

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async ({ token }) => {
    const { request } = useHttp();
    return await request({
      method: "GET",
      url: "/products",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addProduct",
  async ({ data, token }) => {
    const { request } = useHttp();
    return await request({
      method: "POST",
      url: "/products",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data,
    });
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ data, token, id }) => {
    const { request } = useHttp();
    return await request({
      method: "PATCH",
      url: `/products/${id}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
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
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
      })
      .addCase(editProduct.pending, (state) => {
        state.editedLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.editedProduct = action.payload;
        state.editedLoading = false;
      });
  },
});

export default productsSlice.reducer;
