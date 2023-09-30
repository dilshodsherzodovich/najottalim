import React from "react";
import Card from "./components/Card";

// images
import Equipment from "../../assets/images/equipment.png";
import Product from "../../assets/images/product.png";

const data = [
  {
    image: Product,
    name: "Whey Protein",
    firm: "PureGold",
    usedFor: "Chocolate Hazelnut",
    price: "11 $",
  },
  {
    _id: 1,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
];

const Cart = () => {
  return (
    <div className="mt-[70px] p-[34px] bg-white rounded-[20px]">
      <Card ProductInfo={data} />
    </div>
  );
};

export default Cart;
