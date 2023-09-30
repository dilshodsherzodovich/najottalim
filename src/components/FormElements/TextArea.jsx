import React, { useState } from "react";

function TextArea({
  name,
  id,
  handleOnChange = (e) => {},
  value,
  placeholder,
  required = false,
  className = "",
  defaultValue,
}) {
  const [charNum, setCharNum] = useState(0);
  const max = 2000;

  return (
    <>
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className={`p-[14px] text-lightGrey placeholder:text-lightGrey placeholder:text-[14px] text-[14px] font-[400] border border-lightColor rounded-[5px] outline-none h-44 overflow-auto resize-none ${className}`}
        onChange={(e) => {
          handleOnChange(e);
          setCharNum(e.target.value.length);
        }}
      ></textarea>
      <span className="inline-bloc ml-auto text-lightColor text-[12px] font-[400] mt-1">
        {charNum}/{max}
      </span>
    </>
  );
}

export default TextArea;
