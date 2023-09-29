import React from "react";
import FomrPageHeader from "../../components/FormPageHeader/index.";
import EquipmentForm from "./components/EquipmentForm";

function AddEquipment() {
  return (
    <main className="add-equipment mt-12">
      <FomrPageHeader text={"Yangi jihoz qo'shish"} />
      <section className="teachers-add-form pb-20">
        <EquipmentForm />
      </section>
    </main>
  );
}

export default AddEquipment;
