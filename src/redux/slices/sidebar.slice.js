import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "main",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export default sidebarSlice.reducer;
export const { changeActivePage } = sidebarSlice.actions;
