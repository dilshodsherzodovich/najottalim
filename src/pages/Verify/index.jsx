import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// Images & Icons
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/icons/phone.svg";

// Components
import Heading4 from "../../components/Headings/Heading4";
import FontNormal2 from "../../components/Fonts/FontNormal2";
import FontBold1 from "../../components/Fonts/FontBold1";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearRes, verifyLogin } from "../../redux/slices/verify.slice";
import { login } from "../../redux/slices/auth.slice";
import Timer from "../../components/Timer";

function Verify() {
  const [cookies, setCookie] = useCookies("token");
  const { email, password, loginLoading, loginRes } = useSelector(
    (state) => state.auth
  );
  const { res, loading } = useSelector((state) => state.verify);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!email) {
      navigate("/auth");
      toast.error("Iltimos biinchi email va parolni kiriting", {
        theme: "colored",
        position: "top-center",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!email || !loginRes?.message) return;
    toast.success(loginRes.message, {
      theme: "colored",
      position: "top-center",
    });
    dispatch(clearRes());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginRes]);

  useEffect(() => {
    if (!res?.token) return;
    setCookie("token", res.token, {
      path: "/",
      secure: "Dilshod",
      maxAge: 30 * 24 * 3600,
    });
    navigate("/");
    dispatch(clearRes());

    //eslint-disable-next-line
  }, [res]);

  const handleResend = () => {
    dispatch(login({ email, password }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const verificationCode = formData.get("verificationCode");
    dispatch(verifyLogin({ verificationCode, email }));
  };

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
            <div className="w-[12px] h-[12px] bg-accentBlue rounded-full opacity-30"></div>
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
              {email}
            </span>

            <form onSubmit={handleSubmit} className="mt-14">
              <div className="flex items-center">
                <input
                  type="text"
                  name="verificationCode"
                  id="password"
                  placeholder="Type code here"
                  className="w-full bg-bgGrey indent-[22px] pt-[12px] pb-[9px] rounded-[4px]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading
                    ? "bg-bgGrey text-lightGrey"
                    : " bg-accentBlue text-white"
                } text-[20px] py-3  rounded-lg mt-[47px]`}
              >
                {loading || loginLoading ? "Loading..." : "Submit"}
              </button>
              <div className="text-[16px] font-[500] text-center mt-[20px] flex items-center justify-end gap-2">
                <span className="text-babyBlue">
                  <Timer handleResend={handleResend} />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
