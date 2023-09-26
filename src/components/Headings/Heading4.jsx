import React from "react";

function Heading4({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[24px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading4;
