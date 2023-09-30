import React, { useEffect } from "react";
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
import { useCookies } from "react-cookie";
import {
  createCategory,
  getProductCategories,
} from "../../../redux/slices/productCategories.slice";

function ProductForm({ edit }) {
  const { product } = useSelector((state) => state.singleProduct);
  const { categories, loading } = useSelector(
    (state) => state.productCategories
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies] = useCookies("token");

  useEffect(() => {
    dispatch(getProductCategories({ token: cookies.token }));

    //eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    formData.append("type", "product");
    formData.forEach((value, key) => {
      console.log(typeof value, key);
    });
    dispatch(addNewProduct({ data: formData, token: cookies.token }));
  };

  const handleOptions = (arrayOptions) => {
    let options = [];
    if (loading) {
      options = [
        {
          value: "Yuklnamoqda",
          label: "Yuklanmoqda",
          isDisabled: true,
        },
      ];
      return options;
    }

    if (!arrayOptions || arrayOptions.error || arrayOptions.length <= 0) {
      options = [
        {
          value: "Ma'lumotlar mavjud emas",
          label: "Ma'lumotlar mavjud emas",
          isDisabled: true,
        },
      ];
      return options;
    }

    arrayOptions.forEach((item) => {
      options.push({
        value: item._id,
        label: item.name,
      });
    });

    return options;
  };

  const handleCreateProduct = (e) => {
    dispatch(
      createCategory({
        data: { name: e, type: "product" },
        token: cookies.token,
      })
    );
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
          handleCreate={handleCreateProduct}
          name="category"
          creatable={true}
          defaultValue={
            edit ? { value: product.category, label: "Gainer" } : null
          }
          options={handleOptions(categories)}
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
