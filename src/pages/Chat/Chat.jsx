import React from "react";
import avatar from "../../assets/images/Teacher.png";
import Incoming from "./components/Incoming";

const chat = [
  {
    img: avatar,
    firstname: "Aziz",
    last_msg: "Assalomu alaykum",
  },
  {
    img: avatar,
    firstname: "Odil",
    last_msg: "Qalaysiz",
  },
  {
    img: avatar,
    firstname: "Nabijon",
    last_msg: "Zal Qachon ochiladi?",
  },
  {
    img: avatar,
    firstname: "Murod",
    last_msg: "Salom!",
  },
];

const Chat = () => {
  return (
    <section className="w-full h-screen mt-[43px]">
      <div className="grid grid-cols-5 gap-5">
        <div className="col-span-1 h-screen">
          {chat.map((item, index) => (
            <div className="flex items-center gap-6 bg-white py-[20px] px-[25px] rounded-[20px] mb-1">
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={item.img}
                alt="avatar"
              />
              <div>
                <p className="text-[#101828] text-[15px] font-[700]">
                  {item.firstname}
                </p>
                <p className="text-[#667085] text-[14px] font-[700]">
                  {item.last_msg}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4 bg-[#DDFCF5] h-screen rounded-[20px] py-[16px] px-[25px]">
          <p className="time text-[#667085] text-[21px] font-[700] text-center">
            12.02.2023
          </p>
          <div className="messages">
            <Incoming>Salom!</Incoming>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
