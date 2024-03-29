import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsConfirmOpen } from "../../../redux/slices/modals.slice";
import ProductImg from "../../../assets/images/product.png";

const Product = ({ ProductInfo }) => {
  const dispatch = useDispatch();
  const handleConfirmModalOpen = () => {
    dispatch(setIsConfirmOpen(true));
  };
  return (
    <div className="grid grid-cols-3 min-[1281px]:grid-cols-4 gap-[35px]">
      {ProductInfo.map((item, index) => (
        <div
          key={index}
          className="bg-lightColor px-3 pt-[13px] pb-8 inline-block rounded-[20px] col-span-1 relative"
        >
          <div className="w-[100%] mb-2">
            <div className="w-full h-[255px]">
              <img
                src={`http://localhost:3001/products/images/${item.avatar}`}
                className="w-full h-full object-cover"
                alt="equipment img"
              />
            </div>
            <div className="flex gap-4 absolute bottom-2 right-7">
              <Link
                to={`/products/edit?productId=${item._id}`}
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
            <FontBold1 className="text-textRed">{item.brand}</FontBold1>
          </div>
          <div className="flex justify-between">
            <FontBold1 className="text-textLightBlue">{item.usedFor}</FontBold1>
            <FontBold1 className="text-priceSecondary">
              {item.price} $
            </FontBold1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
