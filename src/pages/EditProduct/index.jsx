import React from "react";
import FomrPageHeader from "../../components/FormPageHeader/index.";
import ProductForm from "../AddProducts/components/ProductForm";

function EditProduct() {
  return (
    <main className="edit-product mt-12">
      <FomrPageHeader text={"Yangi mahsulot qo'shish"} />
      <section className="teachers-add-form pb-20">
        <ProductForm edit={true} />
      </section>
    </main>
  );
}

export default EditProduct;
