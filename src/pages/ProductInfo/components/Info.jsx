import React from "react";

import Heading4 from "../../../components/Headings/Heading4";
import Heading1 from "../../../components/Headings/Heading1";
import FontBold1 from "../../../components/Fonts/FontBold1";
import Heading6 from "../../../components/Headings/Heading6";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/Calendar.svg";
import { ReactComponent as PriceIcon } from "../../../assets/icons/price.svg";
import { handleWorkDays } from "../../../utils/handleWorkDays";

const Info = ({ title, details }) => {

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
            className="col-span-1 w-[90%] h-full rounded-[20px] object-cover"
            src={details.avatar}
            alt="avatar"
          />
          <div className="col-span-2 p-7 rounded-[20px] border-[1px] border-solid border-[#000] bg-[#F5F5F5]">
            <div className="ml-[30px]">
              <Heading1 className="text-[35px]">{details.name}</Heading1>
              <Heading1 className="text-[35px] my-[42px]">
                {details.product_type}
              </Heading1>
              <Heading1 className="text-[25px] text-[#C41F28]">
                {details.firm}
              </Heading1>
            </div>

            <div className="card-footer flex items-center justify-between mt-[24px]">
              <div className="degree-box flex items-center gap-3">
                <div className="px-[20px] py-[10px] bg-lightGrey rounded-full text-[25px] text-white">
                  <span>S</span>
                </div>
                <div>
                  <span className="text-[24px] font-[400] text-lightGrey">
                    Soni
                  </span>
                  <Heading6 className="text-[20px]">
                    {details.quantity}
                  </Heading6>
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
                  <PriceIcon className="" width={30} height={30} />
                </div>
                <div>
                  <span className="text-[24px] font-[400] text-lightGrey">
                    Narxi:
                  </span>
                  <Heading6 className="text-[20px] text-[#FCC43E]">
                    {details.price} $
                  </Heading6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[72px] px-[33px] py-[41px] rounded-[15px] bg-[#F5F5F5] border-solid border-[1px]">
          <FontBold1 className="text-[35px] text-lightGrey">
            {details.information}
          </FontBold1>
        </div>
      </section>
    </>
  );
};

export default Info;
