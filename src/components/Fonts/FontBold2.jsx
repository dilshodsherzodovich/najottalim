import React from "react";

function FontBold2({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[14px] font-[600] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default FontBold2;
