import React from "react";

function CustomAddForm({ handleSubmit, children, className = "" }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className={`${className} grid grid-cols-2 gap-x-28 gap-y-16 px-16 pt-15 bg-white rounded-b-[20px]`}
    >
      {children}
    </form>
  );
}

export default CustomAddForm;
