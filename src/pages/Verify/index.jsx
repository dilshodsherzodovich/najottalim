import React, { useState } from "react";
import { Link } from "react-router-dom";
// Images & Icons
import Logo from "../../assets/logo.png";
import Phone from "../../assets/icons/phone.svg";

// Components
import Heading4 from "../../components/Headings/Heading4";
import FontNormal2 from "../../components/Fonts/FontNormal2";
import FontBold1 from "../../components/Fonts/FontBold1";

function Verify() {
  return (
    <div className="h-screen w-full fixed">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-6 bg-bgColorSecondary text-center py-36">
          <img src={Logo} alt="Logo" className="w-[300px] mx-auto mb-10" />
          <Heading4 className="text-textBlack text-[26px]">Fitnes</Heading4>
          <FontNormal2 className="text-[16px] mt-[37px] mb-[47px]">
            qisqacha ta’rif
          </FontNormal2>
          <div className="flex gap-[6px] justify-center pt-10">
            <Link to="/auth">
              <div className="w-[12px] h-[12px] bg-accentBlue rounded-full opacity-30"></div>
            </Link>
            <div className="w-[12px] h-[12px] bg-accentBlue rounded-full"></div>
            <div className="w-[12px] h-[12px] bg-accentBlue rounded-full opacity-30"></div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-[60%] mx-auto pt-[100px] text-center">
            <FontBold1 className="text-[30px] text-textBlack my-3">
              Second Step Verification
            </FontBold1>
            <img
              src={Phone}
              alt="phone icon"
              className="mx-auto mt-[45px] mb-[63px]"
            />
            <FontNormal2 className="text-black text-[16px] font-[400]">
              Enter the verification code we sent to
            </FontNormal2>
            <span className="text-accentBlue text-[18px] font-[600]">
              demo@gmail.com
            </span>

            <form action="#" className="mt-14">
              <div className="flex items-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Type code here"
                  className="w-full bg-bgGrey indent-[22px] pt-[12px] pb-[9px] rounded-[4px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accentBlue text-[20px] py-3 text-white rounded-lg mt-[47px]"
              >
                Submit
              </button>
              <p className="text-[16px] font-[500] text-center mt-[20px]">
                Didn't get the code?{" "}
                <span className="text-babyBlue">Resend</span>
                <span className="text-babyBlue block mt-[19px]">Call me</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
