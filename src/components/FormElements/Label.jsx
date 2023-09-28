import React from "react";

function Label({ id, children, required = false }) {
  return (
    <label htmlFor={id} className="text-textColor font-[600] text-[18px] mb-3">
      {children} {required ? "*" : null}
    </label>
  );
}

export default Label;
