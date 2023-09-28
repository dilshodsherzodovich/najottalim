import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConfirmOpen: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsConfirmOpen: (state, action) => {
      state.isConfirmOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setIsConfirmOpen } = modalSlice.actions;
