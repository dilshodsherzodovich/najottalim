import Sidebar from "./components/Sidebar";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import MainSection from "./components/MainSection";
import { useCookies } from "react-cookie";

const MainLayout = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [cookies] = useCookies("token");

  return isAuth ? (
    <div className="flex">
      <Sidebar />
      <MainSection />
    </div>
  ) : (
    <Navigate to="/auth" />
  );
};

export default MainLayout;
