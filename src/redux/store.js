import { configureStore } from "@reduxjs/toolkit";

//slices
import sidebar from "./slices/sidebar.slice";
import teachers from "./slices/teachers.slice";
import modals from "./slices/modals.slice";
import singleTeacher from "./slices/singleTeacher.slice";

export const store = configureStore({
  reducer: { sidebar, teachers, modals, singleTeacher },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
