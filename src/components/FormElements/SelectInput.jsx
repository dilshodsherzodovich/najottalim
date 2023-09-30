import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { ReactComponent as Icon } from "../../assets/icons/dropdown.svg";

function DropdownIcon({ innerProps }) {
  return (
    <div
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
      }}
    >
      <Icon fill="#4D44B5" width={25} height={25} />
    </div>
  );
}

function DropdownIconDown({ innerProps }) {
  return (
    <div
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        transform: "rotate(180deg)",
      }}
    >
      <Icon fill="#4D44B5" width={25} height={25} />
    </div>
  );
}

function SelectInput({
  creatable = false,
  options,
  isSearchable = false,
  name,
  defaultValue,
}) {
  const [showMenu, setShowMenu] = useState(false);
  console.log(defaultValue);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: "#C1BBEB",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderColor: "#C1BBEB",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "12px 0 12px 14px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#4D44B5" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      fontSize: "14px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#A098AE",
      fontSize: "14px",
    }),
  };

  if (creatable)
    return (
      <CreatableSelect
        name={name}
        className="custom-select"
        options={options}
        isClearable
        defaultValue={defaultValue}
        placeholder="Tanlang..."
        styles={customStyles}
        onMenuClose={() => {
          setShowMenu(false);
        }}
        onMenuOpen={() => {
          setShowMenu(true);
        }}
        components={{
          DropdownIndicator: showMenu ? DropdownIconDown : DropdownIcon,
        }}
      />
    );
  return (
    <Select
      name={name}
      className="custom-select"
      options={options}
      isSearchable={isSearchable}
      placeholder="Tanlang..."
      defaultValue={defaultValue}
      styles={customStyles}
      onMenuClose={() => {
        setShowMenu(false);
      }}
      onMenuOpen={() => {
        setShowMenu(true);
      }}
      components={{
        DropdownIndicator: showMenu ? DropdownIconDown : DropdownIcon,
      }}
    />
  );
}

export default SelectInput;
