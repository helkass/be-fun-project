import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
   const user = localStorage.getItem("g_clothes_user")
      ? JSON.parse(localStorage.getItem("g_clothes_user"))
      : false;
   if (!user.logIn) {
      return <Navigate to={"/auth"} replace />;
   }
   return children;
};

export default ProtectedRoute;
