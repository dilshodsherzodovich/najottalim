import { createSlice } from "@reduxjs/toolkit";
import teachers from "../../db/teachers.json";

const initialState = {
  teacher: teachers.teachers[0],
};

const singleTeacherSlice = createSlice({
  name: "singleTeacher",
  initialState,
});

export default singleTeacherSlice.reducer;
