import React from "react";
import { ReactComponent as SearchLogo } from "../../assets/icons/Search.svg";

function SearchPanel({
  type = "text",
  className = "",
  value,
  name = "",
  placeholder = "Search here...",
  handleOnChange = (e) => {},
}) {
  return (
    <div className="inline-flex items-center border rounded-[50px] pl-4 bg-white">
      <span>
        <SearchLogo width={25} height={25} />
      </span>
      <input
        type={type}
        className={`${className} leading-[14px] text-lightGrey placeholder:text-[14px] placeholder:text-lightGrey bg-transparent text-[14px] py-3 px-[14px] font-[400] outline-none `}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
    </div>
  );
}

export default SearchPanel;
