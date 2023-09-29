import React from "react";
import Info from "./component/Info";
import img from "../../assets/images/Teacher.png";

const ClientInfo = {
  _id: "123456789",
  first_name: "Mirkomil",
  last_name: "Mirzayev",
  birth_date: "2003-01-01T00:00:00.000Z",
  gender: "male",
  avatar: img,
  phone_number: "998997774455",
  email: "admin@gmail.com",
  degree: "IV",
  information:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  createdAt: "2023-09-27T05:36:14.847Z",
  updatedAt: "2023-09-27T05:36:14.847Z",
  workDays: "even",
};

const ClientsInfo = () => {
  return (
    <main className="mt-12">
      <Info title="Mijozni ma'lumotlari" details={ClientInfo} />
    </main>
  );
};

export default ClientsInfo;
