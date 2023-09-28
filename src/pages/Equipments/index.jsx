import React from "react";

// Components
import PagesIntro from "../../components/PagesIntro";

// Images & Icons
import Equipment from "../../assets/images/equipment.png";
import PaginatedItemsEquipments from "../../components/PaginatedItems/PaginatedItemsEquipments";

const dataEquipments = [
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
];

const Equipments = () => {
  return (
    <>
      <PagesIntro />
      <div className="bg-white p-[25px] rounded-[20px]  mt-[30px]">
        <PaginatedItemsEquipments data={dataEquipments} itemsPerPage={12} />
      </div>
    </>
  );
};

export default Equipments;
