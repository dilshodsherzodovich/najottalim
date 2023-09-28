import React from "react";

// Components
import PagesIntro from "../../components/PagesIntro";

// Images & Icons
import Equipment from "../../assets/images/equipment.png";
import PaginatedItemsEquipments from "../../components/PaginatedItems/PaginatedItemsEquipments";

const dataEquipments = [
  {
    _id: 1,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 2,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 3,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 4,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 5,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 6,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 7,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 8,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 9,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 10,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 11,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 12,
    image: Equipment,
    name: "Trinajor runner",
    firm: "Doys Rong",
    usedFor: "Yugurish uchun",
    price: "130 $",
  },
  {
    _id: 13,
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
