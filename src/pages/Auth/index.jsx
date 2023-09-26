import React, { useState } from "react";
import { Link } from "react-router-dom";
// Images & Icons
import Logo from "../../assets/logo.png";
import Hand from "../../assets/icons/hand.svg";
import {
  AiOutlineInfoCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
// Components
import Heading4 from "../../components/Headings/Heading4";
import FontNormal2 from "../../components/Fonts/FontNormal2";
import FontBold1 from "../../components/Fonts/FontBold1";

function Auth() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen w-full fixed">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-6 bg-bgColorSecondary text-center py-36">
          <img src={Logo} alt="Logo" className="w-[300px] mx-auto mb-10" />
          <Heading4 className="text-textBlack text-[26px]">Login</Heading4>
          <FontNormal2 className="text-[16px] mt-[37px] mb-[47px]">
            qisqacha ta’rif
          </FontNormal2>
          <div className="flex gap-[6px] justify-center pt-10">
            <div className="w-[12px] h-[12px] bg-accentBlue rounded-full"></div>
            <Link to="/auth/verify">
              <div className="w-[12px] h-[12px] bg-accentBlue rounded-full opacity-30"></div>
            </Link>
            <div className="w-[12px] h-[12px] bg-accentBlue rounded-full opacity-30"></div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-[60%] mx-auto pt-[100px]">
            <img src={Hand} alt="hand icon" />
            <FontBold1 className="text-[30px] text-textBlack my-3">
              Welcome back!
            </FontBold1>
            <FontNormal2 className="text-textBlack text-[16px]">
              Please login to access your account.
            </FontNormal2>

            <form action="#" className="mt-14">
              <div className="flex justify-between mb-[10px]">
                <label
                  htmlFor="email"
                  className="text-[16px] font-[500] text-textGrey"
                >
                  G-mail
                </label>
                <AiOutlineInfoCircle className="icon text-[16px]" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-bgGrey indent-[22px] pt-[12px] pb-[9px] rounded-[4px]"
                placeholder="Type your g-mail"
              />

              <div className="flex justify-between mt-[30px]">
                <label
                  htmlFor="password"
                  className="text-[16px] font-[500] text-textGrey mb-[10px]"
                >
                  Password
                </label>
              </div>
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Type your pasword"
                  className="w-full bg-bgGrey indent-[22px] pt-[12px] pb-[9px] rounded-[4px]"
                />
                <span
                  className=" absolute right-5"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <AiFillEye className="text-lightGrey text-[20px]" />
                  ) : (
                    <AiFillEyeInvisible className="text-lightGrey text-[20px]" />
                  )}
                </span>
              </div>
              <p className="text-[16px] text-babyBlue font-[500] mt-[10px]">
                Forgot Pasword?
              </p>

              <button
                type="submit"
                className="w-full bg-accentBlue text-[20px] py-3 text-white rounded-lg mt-[47px]"
              >
                Log in
              </button>
              <p className="text-[16px] font-[500] text-center mt-[20px]">
                Don't have an account?{" "}
                <span className="text-babyBlue">Sign Up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
