import React from "react";
import PagesIntro from "../../components/PagesIntro";
import PaginatedItemsProducts from "../../components/PaginatedItems/PaginatedItemsProducts";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <PagesIntro />
      <div className="bg-white p-[25px] rounded-[20px]  mt-[30px]">
        <PaginatedItemsProducts data={products} itemsPerPage={12} />
      </div>
    </>
  );
};

export default Products;
