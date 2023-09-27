import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import { ReactComponent as UserIcon } from "../../../assets/icons/User.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/Calendar.svg";
import teacherImage from "../../../assets/images/Teacher.png";
import Heading6 from "../../../components/Headings/Heading6";
import { handleWorkDays } from "../../../utils/handleWorkDays";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

function TeacherCard({ _id, first_name, last_name, degree, workDays, avatar }) {
  const handleCopy = () => {
    toast.success("Copied to clipboard", {
      theme: "colored",
      position: "top-center",
      autoClose: 400,
    });
  };

  return (
    <div className="col-span-1 py-4 px-5 bg-white rounded-[20px]">
      <div className="inner-card">
        <div className="img-box w-40 h-40 rounded-full mx-auto">
          <img
            className="w-full h-full object-cover"
            src={teacherImage}
            alt=""
          />
        </div>
        <div className="info-box">
          <FontBold1 className="text-center text-textColor">
            {first_name} {last_name}
          </FontBold1>
          <FontBold1 className="text-center text-primary ">
            <CopyToClipboard text={_id} onCopy={handleCopy}>
              <span className="cursor-pointer">ID: {_id.slice(0, 10)}...</span>
            </CopyToClipboard>
          </FontBold1>
        </div>
        <div className="card-footer flex items-center justify-between mt-8 ">
          <div className="degree-box flex items-center gap-3">
            <div className="p-2 bg-lightGrey rounded-full">
              <UserIcon width={25} height={25} />
            </div>
            <div>
              <span className="text-[14px] font-[400] text-lightGrey">
                Toifa
              </span>
              <Heading6>{degree}</Heading6>
            </div>
          </div>
          <div className="days-box flex items-center gap-3">
            <div className="p-2 bg-lightGrey rounded-full">
              <CalendarIcon width={25} height={25} />
            </div>
            <div>
              <span className="text-[14px] font-[400] text-lightGrey">
                Kuni
              </span>
              <Heading6>{handleWorkDays(workDays)}</Heading6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
