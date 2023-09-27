import React from "react";
import PagesIntro from "../../components/PagesIntro";
import TeachersList from "./components/TeachersList";

function Teachers() {
  return (
    <div className="teachers-page">
      <section>
        <PagesIntro />
      </section>
      <section className="teachers-list mt-12">
        <TeachersList />
      </section>
    </div>
  );
}

export default Teachers;
