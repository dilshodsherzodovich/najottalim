import React from "react";

function FontNormal1({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[18px] font-[400] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default FontNormal1;
