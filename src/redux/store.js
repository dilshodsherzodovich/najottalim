import { configureStore } from "@reduxjs/toolkit";

//slices
import sidebar from "./slices/sidebar.slice";
import teachers from "./slices/teachers.slice";
import modals from "./slices/modals.slice";

export const store = configureStore({
  reducer: { sidebar, teachers, modals },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
