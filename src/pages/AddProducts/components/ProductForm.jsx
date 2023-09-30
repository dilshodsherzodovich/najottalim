import React from "react";
import CustomAddForm from "../../../components/FormElements/CustomAddForm";
import PrimaryInput from "../../../components/FormElements/PrimaryInput";
import PrimaryBtn from "../../../components/FormElements/PrimaryBtn";

import Label from "../../../components/FormElements/Label";
import TextArea from "../../../components/FormElements/TextArea";
import FileUpload from "../../../components/FormElements/FileUpload";
import SelectInput from "../../../components/FormElements/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../../../redux/slices/products.slice";
import axios from "axios";

function ProductForm({ edit }) {
  const { product } = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
      console.log(value, key);
    });
    dispatch(addNewProduct({ data: formData }));
    // axios
    //   .post("http://localhost:3001/products/", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <CustomAddForm
      className="pt-12 pb-24"
      handleSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="flex flex-col col-span-1">
        <Label id={"name"} required={true}>
          Nomi
        </Label>
        <PrimaryInput
          name="name"
          type="text"
          defaultValue={edit ? product.name : null}
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
          defaultValue={edit ? product.price : null}
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
          defaultValue={edit ? product.brand : null}
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
            edit ? { value: product.category, label: "Gainer" } : null
          }
          options={[
            { value: "65158bcdc20bab5797098dd0", label: "Gainer" },
            { value: "65158bcdc20bab5797098dd1", label: "Steroid" },
          ]}
        />
      </div>
      <div className="flex flex-col col-span-1">
        <Label id={"information"} required={true}>
          Ma'lumot
        </Label>
        <TextArea
          defaultValue={edit ? product.information : null}
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
          defaultValue={edit ? product.avatar : null}
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
          defaultValue={edit ? product.count : null}
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
        <PrimaryBtn
          type="submit"
          className="border-2 border-primary text-white bg-primary"
        >
          {edit ? "Saqlash" : "Qo'shish"}
        </PrimaryBtn>
      </div>
    </CustomAddForm>
  );
}

export default ProductForm;
