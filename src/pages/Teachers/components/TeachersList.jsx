import React from "react";
import { useSelector } from "react-redux";

function TeachersList() {
  const { teachersList } = useSelector((state) => state.teachers);

  return <div className="allTeachers"></div>;
}

export default TeachersList;
