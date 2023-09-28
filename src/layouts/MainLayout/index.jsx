import Sidebar from "./components/Sidebar";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import MainSection from "./components/MainSection";

const MainLayout = () => {
  const [isAuth, setIsAuth] = useState(true);

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
