import React from "react";
import { useSelector } from "react-redux";
import TeacherCard from "./TeacherCard";

function TeachersList() {
  const { teachersList } = useSelector((state) => state.teachers);

  const renderList = (teachersList) => {
    return teachersList.map((item) => {
      return <TeacherCard key={item._id} {...item} />;
    });
  };

  return (
    <div className="allTeachers grid grid-cols-3 min-[1281px]:grid-cols-4 gap-4 min-[1281px]:gap-8">
      {renderList(teachersList)}
    </div>
  );
}

export default TeachersList;
