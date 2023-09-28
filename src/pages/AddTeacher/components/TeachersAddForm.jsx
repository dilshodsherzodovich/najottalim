import React from "react";
import CustomAddForm from "../../../components/FormElements/CustomAddForm";
import PrimaryInput from "../../../components/FormElements/PrimaryInput";
import PrimaryBtn from "../../../components/FormElements/PrimaryBtn";

import Label from "../../../components/FormElements/Label";
import TextArea from "../../../components/FormElements/TextArea";
import FileUpload from "../../../components/FormElements/FileUpload";
import SelectInput from "../../../components/FormElements/SelectInput";
import { useSelector } from "react-redux";
import { formatDate } from "../.././../utils/formDate";
import { useNavigate } from "react-router-dom";

function TeachersAddForm({ edit }) {
  const { teacher } = useSelector((state) => state.singleTeacher);
  const navigate = useNavigate();

  return (
    <CustomAddForm className="pt-12 pb-24">
      <div className="flex flex-col col-span-1">
        <Label id={"teacher_name"} required={true}>
          Ism
        </Label>
        <PrimaryInput
          name="first_name"
          type="text"
          defaultValue={edit ? teacher.first_name : null}
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
          defaultValue={edit ? teacher.last_name : null}
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
          defaultValue={edit ? teacher.phone_number : null}
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
          defaultValue={edit ? { value: teacher.gender, label: "Erkak" } : null}
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
          defaultValue={edit ? teacher.information : null}
          required={true}
          name={"information"}
          id="info"
          placeholder={"Ustoz to'g'risida qisqacha ma'lumot bering"}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"avatar"} required={true}>
          Rasmi
        </Label>
        <FileUpload name="avatar" id="avatar" />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"email"} required={true}>
          Email
        </Label>
        <PrimaryInput
          type="email"
          id="email"
          required={true}
          defaultValue={edit ? teacher.email : null}
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
          defaultValue={edit ? formatDate(teacher.birth_date) : null}
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
          defaultValue={edit ? { value: teacher.gender, label: "Erkak" } : null}
          options={[
            { value: "male", label: "Erkak" },
            { value: "female", label: "Ayol" },
          ]}
        />
      </div>
      <div className="buttons flex items-center justify-end gap-8  col-span-2">
        <PrimaryBtn
          className="border-2 border-primary text-primary"
          handleClick={() => {
            navigate("/teachers");
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

export default TeachersAddForm;
