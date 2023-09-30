import { createSlice } from "@reduxjs/toolkit";
import { dataEquipments } from "../../db/equipments";

const initialState = {
  equipments: [...dataEquipments],
};

const equipmentSlice = createSlice({
  name: "equipments",
  initialState,
});

export default equipmentSlice.reducer;
