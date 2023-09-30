import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FontMedium1 from "../../../components/Fonts/FontMedium1";

//Functions
import { useSelector, useDispatch } from "react-redux";
import { changeActivePage } from "../../../redux/slices/sidebar.slice";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

//images
import { ReactComponent as HomeLogo } from "../../../assets/icons/Home.svg";
import { ReactComponent as UserLogo } from "../../../assets/icons/User.svg";
import { ReactComponent as TeacherLogo } from "../../../assets/icons/Teacher.svg";
import { ReactComponent as ChatLogo } from "../../../assets/icons/Chat.svg";
import { ReactComponent as ActivityLogo } from "../../../assets/icons/Activity.svg";
import { ReactComponent as CalendarLogo } from "../../../assets/icons/Calendar.svg";
import logoImage from "../../../assets/images/logo.png";

function Sidebar() {
  const { activePage } = useSelector((state) => state.sidebar);
  const dispath = useDispatch();
  const location = useLocation();
  const mainRoute = location.pathname.split("/")[1];

  useEffect(() => {
    dispath(changeActivePage(mainRoute || "main"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRoute]);

  const links = [
    {
      name: "Asosiy",
      icon: <HomeLogo className="sidebar-logo" />,
      link: "/",
      value: "main",
    },
    {
      name: "Ustozlar",
      icon: <TeacherLogo className="sidebar-logo" />,
      link: "/teachers",
      value: "teachers",
    },
    {
      name: "Mijozlar",
      icon: <UserLogo className="sidebar-logo" />,
      link: "/clients",
      value: "clients",
    },
    {
      name: "Jihozlar",
      icon: <CalendarLogo className="sidebar-logo" />,
      link: "/equipments",
      value: "equipments",
    },
    {
      name: "Maxsulotlar",
      icon: <CalendarLogo className="sidebar-logo" />,
      link: "/products",
      value: "products",
    },
    {
      name: "Buyurtmalar",
      icon: <CalendarLogo className="sidebar-logo" />,
      link: "/orders",
      value: "orders",
    },
    {
      name: "Savol javob",
      icon: <ChatLogo className="sidebar-logo" />,
      link: "/chat",
      value: "chat",
    },
    {
      name: "Statistika",
      icon: <ActivityLogo className="sidebar-logo" />,
      link: "/statistics",
      value: "statistics",
    },
  ];

  const renderLinks = () => {
    return links.map((item) => {
      const itemClass = classNames(
        "sidebar-item inline-flex items-center gap-6 px-[1.4rem] py-3 min-[1281px]:px-[1.5rem] min-[1281px]:py-3 rounded-l-[40px] mb-2",
        {
          "active bg-bgColor": item.value === activePage,
        }
      );
      return (
        <Link className={itemClass} key={item.name} to={item.link}>
          <span>{item.icon}</span>
          <FontMedium1
            className={`${
              activePage === item.value ? "text-primary" : "text-lightColor"
            }`}
          >
            {item.name}
          </FontMedium1>
        </Link>
      );
    });
  };

  return (
    <div className="w-[310px] min-[1281px]:w-[345px]">
      <div className="sidebar-inner h-screen sticky w-full bg-primary left-0 top-0 bottom-0 pt-2">
        <div className="logo-box w-[150px] mx-auto mb-2">
          <img
            className="w-full h-full object-cover"
            src={logoImage}
            alt="logo"
          />
        </div>
        <div className="links-list flex flex-col pl-2 gap-2  min-[1281px]:pl-12">
          {renderLinks()}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
