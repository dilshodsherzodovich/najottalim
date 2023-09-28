import React from "react";
import PagesIntro from "../../components/PagesIntro";
import PaginatedItemsProducts from "../../components/PaginatedItems/PaginatedItemsProducts";
import Product from "../../assets/images/product.png";

const dataProducts = [
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
];

const Products = () => {
  return (
    <>
      <PagesIntro />
      <div className="bg-white p-[25px] rounded-[20px]  mt-[30px]">
        <PaginatedItemsProducts data={dataProducts} itemsPerPage={12} />
      </div>
    </>
  );
};

export default Products;
