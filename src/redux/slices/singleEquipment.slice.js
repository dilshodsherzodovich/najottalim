import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipment: {
    name: "Trenajor",
    price: 130,
    brand: "Nike",
    avatar:
      "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/30/26433530/166764144513007500778.jpeg",
    information: "The Best ones",
    category: "65158bcdc20bab5797098dd0",
    count: 10,
    type: "product",
  },
};

const singleEquipmentSlice = createSlice({
  name: "singleEquipment",
  initialState,
});

export default singleEquipmentSlice.reducer;
