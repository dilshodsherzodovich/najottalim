import React from "react";
import Heading4 from "../../../components/Headings/Heading4";

import PrimaryBtn from "../../../components/FormElements/PrimaryBtn";

function ConfirmContent({ closeModal }) {
  return (
    <div className="w-[600px] bg-white pt-20 pb-12 px-12 shadow-2xl rounded-2xl">
      <Heading4 className="text-textColor text-center mb-12">
        Haqiqatdan ham o'chirmoqchimisiz
      </Heading4>
      <div className="btns flex items-center justify-center gap-16">
        <PrimaryBtn
          handleClick={closeModal}
          className="bg-primary text-white text-[20px] px-8"
        >
          Ortga
        </PrimaryBtn>
        <PrimaryBtn className="bg-warning text-white text-[20px] px-[50px]">
          Ha
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default ConfirmContent;
