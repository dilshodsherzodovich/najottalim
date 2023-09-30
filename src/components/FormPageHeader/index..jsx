import React from "react";
import Heading4 from "../Headings/Heading4";

function FomrPageHeader({ text }) {
  return (
    <section className="page-header ">
      <div className="bg-primary pl-16 text-white py-5 rounded-t-[20px]">
        <Heading4 className="text-white !text-[20px] ">{text}</Heading4>
      </div>
    </section>
  );
}

export default FomrPageHeader;
