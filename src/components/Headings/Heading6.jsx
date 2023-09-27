import React from "react";

function Heading6({ className = "", children }) {
  return (
    <p
      className={`text-textColor text-[14px] font-[700] break-words ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading6;
