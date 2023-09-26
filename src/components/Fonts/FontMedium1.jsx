import React from "react";

function FontMedium1({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[18px] font-[500] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default FontMedium1;
