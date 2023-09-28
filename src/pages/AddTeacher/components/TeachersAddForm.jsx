import React from "react";
import CustomAddForm from "../../../components/FormElements/CustomAddForm";
import PrimaryInput from "../../../components/FormElements/PrimaryInput";
import Label from "../../../components/FormElements/Label";
import TextArea from "../../../components/FormElements/TextArea";
import FileUpload from "../../../components/FormElements/FileUpload";
import SelectInput from "../../../components/FormElements/SelectInput";

function TeachersAddForm() {
  return (
    <CustomAddForm className="pt-12 pb-24">
      <div className="flex flex-col col-span-1">
        <Label id={"teacher_name"} required={true}>
          Ism
        </Label>
        <PrimaryInput
          name="first_name"
          type="text"
          id="teacher_name"
          required={true}
          placeholder="Ismingizni kiriting"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"teacher_surname"} required={true}>
          Sharif
        </Label>
        <PrimaryInput
          name="last_name"
          type="text"
          id="teacher_surname"
          required={true}
          placeholder="Familiyangizni kiriting"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"phone"} required={true}>
          Telefon raqami
        </Label>
        <PrimaryInput
          name="phone_number"
          type="number"
          id="phone"
          required={true}
          placeholder="+998901234567"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"info"} required={true}>
          Turi
        </Label>
        <SelectInput
          name="category"
          creatable={true}
          options={[
            { value: "male", label: "Erkak" },
            { value: "female", label: "Ayol" },
          ]}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"info"} required={true}>
          Ma'lumot
        </Label>
        <TextArea
          required={true}
          name={"information"}
          id="info"
          placeholder={"Ustoz to'g'risida qisqacha ma'lumot bering"}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"info"} required={true}>
          Rasmi
        </Label>
        <FileUpload name="avatar" />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"email"} required={true}>
          Rasmi
        </Label>
        <PrimaryInput
          type="email"
          id="email"
          required={true}
          name="email"
          placeholder="demo@gmail.com"
        />
      </div>
      <div className="col-span-1"></div>
      <div className="flex flex-col col-span-1">
        <Label id={"birth_date"} required={true}>
          Tug'ilgan sanasi
        </Label>
        <PrimaryInput
          name="birth_date"
          type="text"
          id="birth_date"
          required={true}
          placeholder="Tug'ilgan kunni kiriting"
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"gender"} required={true}>
          Jinsi
        </Label>
        <SelectInput
          name="gender"
          creatable={false}
          options={[
            { value: "male", label: "Erkak" },
            { value: "female", label: "Ayol" },
          ]}
        />
      </div>
    </CustomAddForm>
  );
}

export default TeachersAddForm;
