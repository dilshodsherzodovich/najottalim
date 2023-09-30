import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    name: "Gainer",
    price: 130,
    brand: "Nike",
    avatar:
      "https://blb.uz/image/cache/catalog/image/cache/catalog/tovar13/MassGainer_5lb_Chocolate-750_Web-700x700.webp",
    information: "The Best ones",
    category: "65158bcdc20bab5797098dd0",
    count: 10,
    type: "product",
  },
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
});

export default singleProductSlice.reducer;
