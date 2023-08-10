import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import { useEffect } from "react";

const Home = () => {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   useEffect(() => {
      if (pathname == "/") {
         navigate("/mobile");
      }
   }, [pathname]);
   return (
      <HomeLayout>
         <Outlet />
      </HomeLayout>
   );
};

export default Home;
