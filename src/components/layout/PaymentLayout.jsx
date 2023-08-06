import { WrapperPay } from "../../pages/Cart";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

const PaymentLayout = ({ leftContent, rightContent }) => {
   const location = useLocation();
   const loc = location.pathname.split("/");
   const stateLocationloc = loc.includes("payment");

   return (
      <section className="container !mt-10 !mb-20">
         <div className="flex text-sm items-center gap-3 flex-nowrap mb-7">
            <span className={stateLocationloc ? "text-slate-400" : undefined}>
               Checkout
            </span>
            <IoIosArrowForward />
            <span
               className={stateLocationloc ? "text-black" : "text-slate-400"}>
               Payment
            </span>
         </div>
         <div className="flex sm:flex-row flex-col gap-5 min-h-[500px]">
            <div className="flex flex-col gap-3 md:w-8/12 w-full">
               {leftContent}
            </div>
            <WrapperPay>{rightContent}</WrapperPay>
         </div>
      </section>
   );
};

export default PaymentLayout;
