import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Auth from "../pages/Auth";
import Loader from "../components/Loader";
import Verify from "../pages/Verify";
import Teachers from "../pages/Teachers";
import Home from "../pages/Home";
import Equipments from "../pages/Equipments";
import Products from "../pages/Products";
import AddTeacher from "../pages/AddTeacher";
import EditTeacher from "../pages/EditTeacher";
import TeachersInfo from "../pages/Info/TeachersInfo";
import ClientsInfo from "../pages/Info/ClientsInfo";

const Router = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients/info" element={<ClientsInfo />} />
          <Route path="/teachers/add" element={<AddTeacher />} />
          <Route path="teachers/edit" element={<EditTeacher />} />
          <Route path="teachers/info" element={<TeachersInfo />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
          <Route path="/auth/verify" element={<Verify />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>404</p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
