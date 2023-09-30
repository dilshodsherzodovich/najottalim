import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  loading: false,
  res: null,
};

export const verifyLogin = createAsyncThunk("auth/verify", async (data) => {
  const { request } = useHttp();
  return await request({
    method: "POST",
    url: "/auth/verify",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    clearRes: (state) => {
      state.res = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyLogin.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
      })
      .addCase(verifyLogin.rejected, (state) => {
        state.res = { err: "Xatolik yuz berdi" };
      });
  },
});

export default verifySlice.reducer;
export const { clearRes } = verifySlice.actions;
