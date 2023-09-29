import React from "react";
import TeachersAddForm from "../AddTeacher/components/TeachersAddForm";
import FomrPageHeader from "../../components/FormPageHeader/index.";

function EditTeacher() {
  return (
    <main className="edit-teacher mt-12">
      <FomrPageHeader text={"Ustozning ma'lumotlarini o'zgartirish"} />
      <section className="teachers-add-form pb-20">
        <TeachersAddForm edit={true} />
      </section>
    </main>
  );
}

export default EditTeacher;
