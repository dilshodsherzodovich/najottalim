import React from "react";

function PrimaryInput({
  id = "",
  type = "text",
  className,
  name = "",
  value,
  placeholder = "",
  required = false,
  defaultValue,
  handleOnChange = (e) => {},
}) {
  return (
    <input
      type={type}
      id={id || ""}
      className={`text-lightGrey text-[14px] font-[400] border border-lightColor rounded-[5px] outline-none py-3 px-[14px] ${className}`}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      required={required}
      onChange={(e) => {
        handleOnChange(e);
      }}
    />
  );
}

export default PrimaryInput;
