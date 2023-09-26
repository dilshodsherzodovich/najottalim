import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

const MainLayout = () => {
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? (
    <div className="grid grid-cols-11">
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};

export default MainLayout;
