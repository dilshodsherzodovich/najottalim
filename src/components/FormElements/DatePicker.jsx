import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({ className = "", id, name, placeholder }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={`${className} text-lightGrey text-[14px] font-[400] border border-lightColor rounded-[5px] outline-none py-3 px-[14px]`}
      id={id}
      name={name}
      dateFormat="dd/MM/yyyy"
      placeholderText="DD/MM/YYYY"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default DateSelector;
