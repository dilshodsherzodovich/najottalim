import React from "react";
import Info from "./components/Info";

// images
import img from "../../assets/images/equipment.png";

const dataInfo = {
  _id: "123456789",
  name: "Trinajor runner",
  product_type: "Yugurish uchun",
  firm: "Doys Rong",
  quantity: "18",
  workDays: "even",
  avatar: img,
  price: "130",
  information:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

const EquipmentInfo = () => {
  return <Info title="Jihoz ma'lumotlari" details={dataInfo} />;
};

export default EquipmentInfo;
