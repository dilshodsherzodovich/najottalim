import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

import img from "../../assets/images/Teacher.png";
const Orders = () => {
  const { format } = require("date-fns");

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      id: 1,
      info: {
        fullname: "John Doe",
        img: img,
        phone: "+998999999999",
      },
      product: "Trinajor runner",
      price: "130",
      date: "2023-09-27T05:36:14.847Z",
      quantity: "1",
    },
    {
      id: 2,
      info: {
        fullname: "John Doe",
        img: img,
        phone: "+998999999999",
      },
      product: "Trinajor runner",
      price: "130",
      date: "2023-09-27T05:36:14.847Z",
      quantity: "1",
    },
  ];

  const toggleRowSelection = (rowId) => {
    if (selectedRows.has(rowId)) {
      selectedRows.delete(rowId);
    } else {
      selectedRows.add(rowId);
    }
    setSelectedRows(new Set(selectedRows));
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(new Set(allRowIds));
    }
    setSelectAll(!selectAll);
  };

  // Pagination
  return (
    <section className="mt-[40px] bg-white rounded-[20px]">
      <table className="w-full">
        <thead className="text-[#8A92A6]">
          <tr className="border-b-2">
            <th className="pr-[30px]  py-[25px]">
              <input
                className=""
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="pr-[30px]">
              <div className="flex items-center gap-5">
                I.O.F <AiOutlineArrowDown className="text-[#667085]" />
              </div>
            </th>
            <th className="">
              <div className="flex items-center gap-5">
                Mahsulotlar <AiOutlineArrowDown className="text-[#667085]" />
              </div>
            </th>
            <th>
              <div className="flex items-center gap-5">
                Narxi <AiOutlineArrowDown className="text-[#667085]" />
              </div>
            </th>
            <th>
              <div className="flex items-center gap-5">
                Vaqti <AiOutlineArrowDown className="text-[#667085]" />
              </div>
            </th>
            <th>
              <div className="flex items-center gap-5">
                Dona <AiOutlineArrowDown className="text-[#667085]" />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b-4 border-bgColor">
              <td className="py-[25px] pl-[32px]">
                <input
                  type="checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleRowSelection(row.id)}
                />
              </td>
              <td className="flex gap-[12px]  pt-[20px]">
                <img
                  src={row.info.img}
                  className="w-[40px] h-[40px] rounded-full"
                  alt="avatar"
                />
                <div>
                  <p className="text-[15px] text-[#101828] font-[700]">
                    {row.info.fullname}
                  </p>
                  <p className="text-[14px] text-[#667085] font-[700]">
                    {row.info.phone}
                  </p>
                </div>
              </td>
              <td className="text-[16px] text-[#232D42] font-[700]">
                {row.product}
              </td>
              <td>{row.price}</td>
              <td>{format(new Date(row.date), "yyyy.MM.dd")}</td>
              <td>{row.quantity}</td>
              <td>
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Orders;
