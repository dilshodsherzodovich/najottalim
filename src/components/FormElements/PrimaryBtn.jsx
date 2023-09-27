import React from "react";

function PrimaryBtn({
  className = "",
  type = "button",
  handleClick = () => {},
  children,
}) {
  return (
    <button
      className={`${className} font-[400] py-[10px] px-[24px] rounded-[40px]`}
      type={type}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryBtn;
