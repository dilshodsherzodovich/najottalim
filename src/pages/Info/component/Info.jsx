import React from "react";

import Heading4 from "../../../components/Headings/Heading4";
import Heading1 from "../../../components/Headings/Heading1";
import FontBold1 from "../../../components/Fonts/FontBold1";
import Heading6 from "../../../components/Headings/Heading6";
import { ReactComponent as UserIcon } from "../../../assets/icons/User.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/Calendar.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone2.svg";
import { handleWorkDays } from "../../../utils/handleWorkDays";

const Info = ({ title, details }) => {
  const { format } = require("date-fns");

  return (
    <>
      <section className="page-header">
        <div className="bg-primary pl-16 text-white py-5 rounded-t-[20px]">
          <Heading4 className="text-white !text-[20px] ">{title}</Heading4>
        </div>
      </section>

      <section className="py-20 px-[18px] bg-white rounded-b-[20px]">
        <div className="grid grid-cols-3">
          <img
            className="col-span-1 w-[90%]"
            src={details.avatar}
            alt="avatar"
          />
          <div className="col-span-2 p-7 rounded-[20px] border-[1px] border-solid border-[#000] bg-[#F5F5F5]">
            <div className="flex justify-between items-center">
              <Heading1 className="text-[35px]">
                {details.first_name} {details.last_name}
              </Heading1>
              <div>
                <FontBold1 className="text-[20px] text-right text-textColor mb-[20px]">
                  {format(new Date(details.updatedAt), "dd.MM.yyyy")}
                </FontBold1>
                <FontBold1 className="text-[25px] font-[700] text-primary">
                  ID {details._id}
                </FontBold1>
              </div>
            </div>
            <Heading1 className="text-[35px] mt-[42px]">28 yosh</Heading1>
            <div className="flex items-center justify-between mt-[42px]">
              <Heading1 className="text-[34px]">
                {details.gender === "male" ? "Erkak" : "Ayol"}
              </Heading1>
              <FontBold1 className="text-[24px] text-textColor pr-[50px]">
                {details.email}
              </FontBold1>
            </div>

            <div className="card-footer flex items-center justify-between mt-[24px]">
              <div className="degree-box flex items-center gap-3">
                <div className="p-3 bg-lightGrey rounded-full">
                  <UserIcon width={30} height={30} />
                </div>
                <div>
                  <span className="text-[24px] font-[400] text-lightGrey">
                    Toifa
                  </span>
                  <Heading6 className="text-[20px]">{details.degree}</Heading6>
                </div>
              </div>
              <div className="days-box flex items-center gap-3">
                <div className="p-3 bg-lightGrey rounded-full">
                  <CalendarIcon width={30} height={30} />
                </div>
                <div>
                  <span className="text-[24px] font-[400] text-lightGrey">
                    Kuni
                  </span>
                  <Heading6 className="text-[20px]">
                    {handleWorkDays(details.workDays)}
                  </Heading6>
                </div>
              </div>
              <div className="phone-box flex items-center gap-3">
                <div className="p-3 bg-lightGrey rounded-full">
                  <PhoneIcon className="" width={30} height={30} />
                </div>
                <div>
                  <span className="text-[24px] font-[400] text-lightGrey">
                    Tel:
                  </span>
                  <Heading6 className="text-[20px]">
                    +{details.phone_number}
                  </Heading6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[72px] px-[33px] py-[41px] rounded-[15px] bg-[#F5F5F5] border-solid border-[1px]">
          <FontBold1 className="text-[35px] text-lightGrey">{details.information}</FontBold1>
        </div>
      </section>
    </>
  );
};

export default Info;
