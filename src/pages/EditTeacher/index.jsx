import React from "react";
import Heading4 from "../../components/Headings/Heading4";
import TeachersAddForm from "../AddTeacher/components/TeachersAddForm";

function EditTeacher() {
  return (
    <main className="edit-teacher mt-12">
      <section className="page-header ">
        <div className="bg-primary pl-16 text-white py-5 rounded-t-[20px]">
          <Heading4 className="text-white !text-[20px] ">
            Ustozning ma'lumotlarini o'zgartirish
          </Heading4>
        </div>
        <section className="teachers-add-form pb-20">
          <TeachersAddForm edit={true} />
        </section>
      </section>
    </main>
  );
}

export default EditTeacher;
