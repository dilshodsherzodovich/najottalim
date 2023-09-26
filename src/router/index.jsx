import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Auth from "../pages/Auth";
import Loader from "../components/Loader";

const Router = () => {
  const { pathname } = useLocation();

  //import project pages
  const Home = lazy(() => import("../pages/Home"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
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
