import React from "react";
import Heading4 from "../../components/Headings/Heading4";
import TeachersAddForm from "./components/TeachersAddForm";

function AddTeacher() {
  return (
    <main className="mt-12">
      <section className="page-header">
        <div className="bg-primary pl-16 text-white py-5 rounded-t-[20px]">
          <Heading4 className="text-white !text-[20px] ">
            Ustozning ma'lumotlari
          </Heading4>
        </div>
      </section>

      <section className="teachers-add-form pb-20">
        <TeachersAddForm />
      </section>
    </main>
  );
}

export default AddTeacher;
