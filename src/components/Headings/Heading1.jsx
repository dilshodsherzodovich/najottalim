import React from "react";

function Heading1({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[48px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading1;
