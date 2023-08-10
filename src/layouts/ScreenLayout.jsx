import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationMainBottom } from "../components/Navigation";

const ScreenLayout = () => {
   return (
      <div className="relative">
         <Outlet />
         <NavigationMainBottom />
      </div>
   );
};

export default ScreenLayout;
