import React from "react";
import { useLocation } from "react-router-dom";
import { handlePageHeader } from "../../../utils/handlePageHeader";
import Heading4 from "../../../components/Headings/Heading4";
import Heading6 from "../../../components/Headings/Heading6";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import { ReactComponent as GearIcon } from "../../../assets/icons/gear.svg";

function Header() {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-between pt-4">
      <Heading4>{handlePageHeader(pathname)}</Heading4>
      <div className="icons-box flex items-center gap-[20px]">
        <div className="p-[14px] rounded-full bg-white inline-block relative">
          <BellIcon width={25} height={25} />
          <div className="w-2 h-2 rounded-full bg-primary absolute top-[10px] right-[10px]"></div>
        </div>
        <div className="p-[14px] rounded-full bg-white inline-block">
          <GearIcon width={25} height={25} />
        </div>
        <div className="userDetails flex items-center gap-[20px]">
          <div className="names">
            <Heading6>Nabila A.</Heading6>
            <span className="text-[14px] font-[400] text-lightGrey">Admin</span>
          </div>
          <div className="w-[60px] h-[60px] rounded-full bg-lightColor"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
