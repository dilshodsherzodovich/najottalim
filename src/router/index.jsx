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
