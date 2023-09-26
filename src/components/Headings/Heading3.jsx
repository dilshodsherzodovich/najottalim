import React from "react";

function Heading3({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[36px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading3;
