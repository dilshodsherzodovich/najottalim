import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import FontNormal2 from "../../../components/Fonts/FontNormal2";
import FontBold2 from "../../../components/Fonts/FontBold2";

const Clients = (clientsInfo) => {
  console.log(clientsInfo.clientsInfo[0]);
  const paddingY = "py-[20px]";
  return (
    <table>
      <thead>
        <tr>
          <th className={`${paddingY}`}></th>
          <th className={`${paddingY}`}>
            <FontBold1 className="text-start text-lightGrey">Mijoz</FontBold1>
          </th>
          <th className={`${paddingY} `}>
            <FontBold1 className=" text-start text-lightGrey">Ustoz</FontBold1>
          </th>
          <th className={`${paddingY} `}>
            <FontBold1 className=" text-start text-lightGrey">Xizmat</FontBold1>
          </th>
          <th className={`${paddingY}`}>
            <FontBold1 className="text-start text-lightGrey">Kuni</FontBold1>
          </th>
        </tr>
      </thead>
      <tbody>
        {clientsInfo.clientsInfo.map((client, id) => (
          <tr key={id}>
            <td className={`${paddingY} px-[2rem]`}>
              <img
                src={client.img}
                className="rounded-full w-[50px] h-[50px] object-cover"
                alt="teacher icon"
              />
            </td>
            <td className={`${paddingY} pr-[5rem]`}>
              <FontBold2 className="">{client.fullname}</FontBold2>
            </td>
            <td className={`${paddingY} pr-[5rem] `}>
              <FontNormal2 className="text-lightGrey">
                {client.teacher}
              </FontNormal2>
            </td>
            <td className={`${paddingY} pr-[6rem]`}>
              <FontBold1 className="text-textColor">{client.service}</FontBold1>
            </td>
            <td className={`${paddingY}`}>
              <FontBold1 className="text-textColor">{client.day}</FontBold1>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Clients;
