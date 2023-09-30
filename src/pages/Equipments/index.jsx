import React from "react";

// Components
import PagesIntro from "../../components/PagesIntro";

// Images & Icons
import PaginatedItemsEquipments from "../../components/PaginatedItems/PaginatedItemsEquipments";
import { useSelector } from "react-redux";

const Equipments = () => {
  const { equipments } = useSelector((state) => state.equipments);

  return (
    <>
      <PagesIntro />
      <div className="bg-white p-[25px] rounded-[20px]  mt-[30px]">
        <PaginatedItemsEquipments data={equipments} itemsPerPage={12} />
      </div>
    </>
  );
};

export default Equipments;
