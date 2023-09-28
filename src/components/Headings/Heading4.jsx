import React from "react";

function Heading4({ className = "", children }) {
  return (
    <p
      className={`${className} text-textColor text-[24px]  font-[700] break-words `}
    >
      {children}
    </p>
  );
}

export default Heading4;
