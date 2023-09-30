import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  categories: [],
  loading: true,
};

export const getProductCategories = createAsyncThunk(
  "productCategories/getAll",
  async ({ token }) => {
    console.log(token);
    const { request } = useHttp();
    return await request({
      url: "/products/category",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
);

export const createCategory = createAsyncThunk(
  "productCategories/create",
  async ({ data, token }) => {
    const { request } = useHttp();
    return await request({
      method: "POST",
      url: "/products/category",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
);

const categorySlice = createSlice({
  name: "productCategories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getProductCategories.rejected, (state) => {
        state.categories = { error: "Xatolik yuz berdi" };
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      });
  },
});

export default categorySlice.reducer;
