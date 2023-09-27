import React from "react";

function FontBold1({ className, children }) {
  return (
    <p className={`${className}  text-[18px] font-[600] break-words`}>
      {children}
    </p>
  );
}

export default FontBold1;
