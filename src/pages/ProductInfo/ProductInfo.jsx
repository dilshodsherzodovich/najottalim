import React from "react";
import Info from "./components/Info";

// images
import img from "../../assets/images/product.png";

const ProductsInfo = {
  _id: "123456789",
  name: "Whey Protein",
  product_type: "Chocolate Hazelnut",
  firm: "PureGold",
  quantity: "60",
  workDays: "even",
  avatar: img,
  price: "13",
  information:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

const ProductInfo = () => {
  return <Info title="Jihoz ma'lumotlari" details={ProductsInfo} />;
};

export default ProductInfo;
