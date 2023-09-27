import { createSlice } from "@reduxjs/toolkit";
import teachers from "../../db/teachers.json";

const initialState = {
  teachersList: teachers.teachers,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
});

export default teachersSlice.reducer;
