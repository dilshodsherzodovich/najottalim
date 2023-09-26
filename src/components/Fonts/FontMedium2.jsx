import React from "react";

function FontMedium2({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[14px] font-[500] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default FontMedium2;
