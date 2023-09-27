import React from "react";

function FontNormal2({ className = "", children }) {
  return (
    <p className={`text-[14px] font-[400] break-words ${className}`}>
      {children}
    </p>
  );
}

export default FontNormal2;
