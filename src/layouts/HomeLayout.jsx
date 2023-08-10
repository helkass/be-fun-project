import { NavgationHomeTop } from "../components/Navigation";

const HomeLayout = ({ children }) => {
   return (
      <div className="relative">
         <NavgationHomeTop />
         {children}
      </div>
   );
};

export default HomeLayout;
