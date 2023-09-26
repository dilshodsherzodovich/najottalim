import { configureStore } from "@reduxjs/toolkit";

//slices
import sidebar from "./slices/sidebar.slice";

export const store = configureStore({
  reducer: { sidebar },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
