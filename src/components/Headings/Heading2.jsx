import React from "react";

function Heading2({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[40px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading2;
