import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const Product = ({ ProductInfo }) => {
  return (
    <div className="grid grid-cols-3 min-[1281px]:grid-cols-4 gap-[35px]">
      {ProductInfo.map((item, index) => (
        <div
          key={index}
          className="bg-lightColor px-3 pt-[13px] pb-8 inline-block rounded-[20px] col-span-1 relative"
        >
          <div className="w-[100%] mb-2">
            <img
              src={item.image}
              className="object-cover"
              alt="equipment img"
            />
            <div className="flex gap-4 absolute bottom-2 right-7">
              <RiDeleteBinLine className="text-[24px] text-iconColor" />
              <RiPencilLine className="text-[24px] text-iconColor" />
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

export default Product;
