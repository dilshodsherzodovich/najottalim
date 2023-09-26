import React from "react";

function FontBold1({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[18px] font-[600] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default FontBold1;
