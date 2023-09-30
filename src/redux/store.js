import { configureStore } from "@reduxjs/toolkit";

//slices
import auth from "./slices/auth.slice";
import verify from "./slices/verify.slice";
import sidebar from "./slices/sidebar.slice";
import modals from "./slices/modals.slice";
import teachers from "./slices/teachers.slice";
import singleTeacher from "./slices/singleTeacher.slice";
import equipments from "./slices/equipments.slice";
import singleEquipment from "./slices/singleEquipment.slice";
import products from "./slices/products.slice";
import singleProduct from "./slices/singleProduct.slice";

export const store = configureStore({
  reducer: {
    auth,
    verify,
    sidebar,
    teachers,
    modals,
    singleTeacher,
    equipments,
    singleEquipment,
    products,
    singleProduct,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
