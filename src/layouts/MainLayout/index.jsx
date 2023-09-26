import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};

export default MainLayout;
