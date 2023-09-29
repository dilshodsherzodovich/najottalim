import React from "react";
import FomrPageHeader from "../../components/FormPageHeader/index.";
import ProductForm from "./components/ProductForm";

function AddProduct() {
  return (
    <main className="add-product mt-12">
      <FomrPageHeader text={"Yangi mahsulot qo'shish"} />
      <section className="teachers-add-form pb-20">
        <ProductForm />
      </section>
    </main>
  );
}

export default AddProduct;
