import React from "react";

function Heading5({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[18px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading5;
