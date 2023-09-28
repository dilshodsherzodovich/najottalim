import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import FontNormal2 from "../../../components/Fonts/FontNormal2";

import user from "../../../assets/icons/User-white.svg";

const Clients = (teachersInfo) => {
  
  const paddingY = "py-[20px]";
  return (
    <table>
      <tbody>
        {teachersInfo.clientsInfo.map((teacher, id) => (
          <tr key={id}>
            <td className={`${paddingY} px-[2rem]`}>
              <img
                src={teacher.img}
                className="rounded-full w-[50px] h-[50px] object-cover"
                alt="teacher icon"
              />
            </td>
            <td className={`${paddingY} pr-[4rem]`}>
              <FontBold1 className="text-start">{teacher.fullname}</FontBold1>
            </td>
            <td className={`${paddingY} px-[4rem]`}>
              <FontBold1 className="text-primary">ID {teacher.id}</FontBold1>
            </td>
            <td className={`${paddingY} px-[5rem]`}>
              <div className="flex gap-4 ">
                <img
                  src={user}
                  className="w-[48px] h-[48px] bg-status rounded-full p-3"
                  alt="user icon"
                />
                <div>
                  <FontNormal2 className="text-lightGrey">Toifa</FontNormal2>
                  <FontBold1>{teacher.degree}</FontBold1>
                </div>
              </div>
            </td>
            <td className={`${paddingY} px-[5rem]`}>
              <FontBold1 className="capitalize px-[43px] rounded-[40px] bg-bgBlue text-price">
                {teacher.EvenOrOdd}
              </FontBold1>
            </td>
            <td className={`${paddingY} pl-[6rem]`}>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-textGrey rounded-full"></div>
                <div className="w-3 h-3 bg-textGrey rounded-full"></div>
                <div className="w-3 h-3 bg-textGrey rounded-full"></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Clients;
