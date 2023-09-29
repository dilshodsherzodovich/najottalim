import React from "react";
import CustomAddForm from "../../../components/FormElements/CustomAddForm";
import PrimaryInput from "../../../components/FormElements/PrimaryInput";
import PrimaryBtn from "../../../components/FormElements/PrimaryBtn";

import Label from "../../../components/FormElements/Label";
import TextArea from "../../../components/FormElements/TextArea";
import FileUpload from "../../../components/FormElements/FileUpload";
import SelectInput from "../../../components/FormElements/SelectInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EquipmentForm({ edit }) {
  const { equipment } = useSelector((state) => state.singleEquipment);
  const navigate = useNavigate();

  return (
    <CustomAddForm className="pt-12 pb-24">
      <div className="flex flex-col col-span-1">
        <Label id={"name"} required={true}>
          Nomi
        </Label>
        <PrimaryInput
          name="name"
          type="text"
          defaultValue={edit ? equipment.name : null}
          id="name"
          required={true}
          placeholder="Maria"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"price"} required={true}>
          Narxi
        </Label>
        <PrimaryInput
          name="price"
          type="number"
          id="price"
          defaultValue={edit ? equipment.price : null}
          required={true}
          placeholder="Narxni kiriting"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"brand"} required={true}>
          Brand
        </Label>
        <PrimaryInput
          name="brand"
          type="text"
          id="brand"
          defaultValue={edit ? equipment.brand : null}
          required={true}
          placeholder="Adidas"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"category"} required={true}>
          Turi
        </Label>
        <SelectInput
          name="category"
          creatable={true}
          defaultValue={
            edit ? { value: equipment.category, label: "Trenajor" } : null
          }
          options={[
            { value: "65158bcdc20bab5797098dd0", label: "Trenajor" },
            { value: "65158bcdc20bab5797098dd1", label: "Turnik" },
          ]}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"information"} required={true}>
          Ma'lumot
        </Label>
        <TextArea
          defaultValue={edit ? equipment.information : null}
          required={true}
          name={"information"}
          id="information"
          placeholder={"Jihoz to'g'risida qisqacha ma'lumot"}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"avatar"} required={true}>
          Rasmi
        </Label>
        <FileUpload
          defaultValue={edit ? equipment.avatar : null}
          name="avatar"
          id="avatar"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"count"} required={true}>
          Soni
        </Label>
        <PrimaryInput
          type="number"
          id="count"
          required={true}
          defaultValue={edit ? equipment.count : null}
          name="count"
          placeholder="0"
        />
      </div>
      <div className="col-span-1"></div>
      <div className="buttons flex items-center justify-end gap-8  col-span-2">
        <PrimaryBtn
          className="border-2 border-primary text-primary"
          handleClick={() => {
            navigate("/equipments");
          }}
        >
          Bekor qilish
        </PrimaryBtn>
        <PrimaryBtn className="border-2 border-primary text-white bg-primary">
          {edit ? "Saqlash" : "Qo'shish"}
        </PrimaryBtn>
      </div>
    </CustomAddForm>
  );
}

export default EquipmentForm;
