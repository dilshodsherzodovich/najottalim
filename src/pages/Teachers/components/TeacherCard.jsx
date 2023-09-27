import React from "react";
import FontBold1 from "../../../components/Fonts/FontBold1";
import { ReactComponent as UserIcon } from "../../../assets/icons/User.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/Calendar.svg";

function TeacherCard({ _id, first_name, last_name, degree, workDays, avatar }) {
  return (
    <div className="col-span-1">
      <div className="inner-card">
        <div className="img-box w-40 h-40 rounded-full">
          <img className="w-full h-full object-cover" src="avatar" alt="" />
        </div>
        <div className="info-box">
          <FontBold1>
            {first_name} {last_name}
          </FontBold1>
          <FontBold1>{_id}</FontBold1>
        </div>
        <div className="card-footer">
          <div className="degree-box">
            <div className="p-2">
              <UserIcon />
            </div>
          </div>
          <div className="days-box">
            <div className="p-2">
              <CalendarIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
