import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Loader from "../components/Loader";
import Verify from "../pages/Verify";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Teachers from "../pages/Teachers";
import AddTeacher from "../pages/AddTeacher";
import Equipments from "../pages/Equipments";
import EditTeacher from "../pages/EditTeacher";
import AddEquipment from "../pages/AddEquipment";
import EditEquipment from "../pages/EditEquipment";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProducts";
import EditProduct from "../pages/EditProduct";

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
          <Route path="/teachers/add" element={<AddTeacher />} />
          <Route path="teachers/edit" element={<EditTeacher />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipments/add" element={<AddEquipment />} />
          <Route path="/equipments/edit" element={<EditEquipment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit" element={<EditProduct />} />
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
