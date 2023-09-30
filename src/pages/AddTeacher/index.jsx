import React from "react";
import TeachersAddForm from "./components/TeachersAddForm";
import FomrPageHeader from "../../components/FormPageHeader/index.";

function AddTeacher() {
  return (
    <main className="add-taecher mt-12">
      <FomrPageHeader text={"Ustozning ma'lumotlari"} />
      <section className="teachers-add-form pb-20">
        <TeachersAddForm />
      </section>
    </main>
  );
}

export default AddTeacher;
