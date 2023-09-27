import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ConfirmModal from "../../../modals/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { setIsConfirmOpen } from "../../../redux/slices/modals.slice";

function MainSection() {
  const { isConfirmOpen } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsConfirmOpen(false));
  };

  return (
    <div className="min-h-screen w-full bg-bgColor px-6 min-[1281px]:px-12">
      <Header />
      <Outlet />
      <ConfirmModal isConfirmOpen={isConfirmOpen} closeModal={closeModal} />
    </div>
  );
}

export default MainSection;
