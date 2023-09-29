import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsConfirmOpen } from "../../../redux/slices/modals.slice";
import EquipmentImg from "../../../assets/images/equipment.png";

const Equipment = ({ EquipmentInfo }) => {
  const dispatch = useDispatch();

  const handleConfirmModalOpen = () => {
    dispatch(setIsConfirmOpen(true));
  };

  return (
    <div className="grid grid-cols-3 min-[1281px]:grid-cols-4 gap-[35px]">
      {EquipmentInfo.map((item, index) => (
        <div
          key={index}
          className="bg-lightColor px-3 pt-[13px] pb-8 inline-block rounded-[20px] relative col-span-1"
        >
          <div className="w-[100%]  mb-2">
            <img
              src={EquipmentImg}
              className="object-cover"
              alt="equipment img"
            />
            <div className="flex absolute top-5 right-4">
              <Link
                to={`/equipments/edit?equipmentId=${item._id}`}
                className="cursor-pointer"
              >
                <EditIcon />
              </Link>
              <span onClick={handleConfirmModalOpen}>
                <DeleteIcon className="cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <FontBold1 className="text-textColor">{item.name}</FontBold1>
            <FontBold1 className="text-textRed">{item.firm}</FontBold1>
          </div>
          <div className="flex justify-between">
            <FontBold1 className="text-textLightBlue">{item.usedFor}</FontBold1>
            <FontBold1 className="text-priceSecondary">{item.price}</FontBold1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Equipment;
