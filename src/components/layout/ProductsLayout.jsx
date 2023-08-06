import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProductsLayout = ({ children, rootRoutes }) => {
   const roots = rootRoutes?.filter((rt) => rt !== "woman" || "men");
   return (
      <>
         <div className="flex gap-3 text-slate-400 container text-sm items-center sm:!mt-16 !mt-8">
            <span>Home</span>
            <IoIosArrowForward />
            <span className={rootRoutes ? "text-slate-400" : "text-black"}>
               Browse products
            </span>
            {rootRoutes && (
               <Fragment>
                  <IoIosArrowForward />
                  <span>{rootRoutes.includes("woman") ? "woman" : "men"}</span>
               </Fragment>
            )}
            {rootRoutes &&
               roots?.slice(-1).map((root, index) => (
                  <Fragment key={index}>
                     <IoIosArrowForward />
                     <span className="text-black">{root}</span>
                  </Fragment>
               ))}
         </div>
         {children}
      </>
   );
};

export default ProductsLayout;
