import React from "react";

function FontMedium1({ className = "", children }) {
  return (
    <p className={`${className} text-[18px] font-[500] break-words `}>
      {children}
    </p>
  );
}

export default FontMedium1;
