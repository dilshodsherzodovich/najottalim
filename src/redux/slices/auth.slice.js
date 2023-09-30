import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  email: "",
  password: "",
  loginLoading: false,
  loginRes: null,
};

export const login = createAsyncThunk("auth/login", async (data) => {
  const { request } = useHttp();
  return await request({
    method: "POST",
    url: "/auth/login",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearLoginRes: (state) => {
      state.loginRes = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginRes = action.payload;
        state.loginLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loginRes = { error: "Something went wrong" };
        state.loginLoading = false;
      });
  },
});

export default authSlice.reducer;
export const { setEmail, setPassword, clearLoginRes } = authSlice.actions;
