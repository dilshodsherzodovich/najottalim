import React from "react";
import FomrPageHeader from "../../components/FormPageHeader/index.";
import EquipmentForm from "../AddEquipment/components/EquipmentForm";

function EditEquipment() {
  return (
    <main className="add-equipment mt-12">
      <FomrPageHeader text={"Jihoz ma'lumotlarini o'zgartirish"} />
      <section className="teachers-add-form pb-20">
        <EquipmentForm edit={true} />
      </section>
    </main>
  );
}

export default EditEquipment;
