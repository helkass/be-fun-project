import { ButtonPayment } from "../atoms/Button";
import InputComponent from "../atoms/InputComponent";
import Typography from "../atoms/Typography";
import PaymentLayout from "./PaymentLayout";
import { Link, Outlet } from "react-router-dom";

function RightContentCheckout() {
   const user = false;
   return (
      <>
         <strong>Your Order</strong>
         <div className="flex gap-2 flex-nowrap border-b border-dashed pb-2">
            <img
               src="/images/2.jpg"
               alt="img"
               className="w-[60px] h-[60px] object-cover"
            />
            <div className="flex flex-col gap-1 text-sm">
               <p className="line-clamp-1 font-semibold w-10/12 capitalize">
                  cahier letter lorehvihrgh ehfgir
               </p>
               <p className="text-slate-400">grey</p>
               <p>x 1</p>
            </div>
            <strong>$2000</strong>
         </div>
         <strong>Discount Code</strong>
         <div className="border-b border-dashed pb-3">
            <label htmlFor="coupon" className="flex gap-2 items-end">
               <InputComponent
                  name={"cuopon"}
                  placeholder={"Add discount code"}
               />
               <button className="px-3 h-max py-2 font-semibold border rounded">
                  Apply
               </button>
            </label>
            {!user && (
               <p className="text-sm whitespace-nowrap gap-1 mt-3 flex flex-nowrap">
                  <strong>New customer?</strong>{" "}
                  <Link className="underline" to={"/signup"}>
                     Sign up
                  </Link>{" "}
                  to get better offer
               </p>
            )}
         </div>
         <div className="border-b border-dashed pb-3">
            <Typography keyName={"Subtotal"} value={2500} pay />
            <Typography keyName={"Discount"} value={0} slate pay />
            <Typography keyName={"Shipping cost"} value={22.5} slate pay />
         </div>
         <Typography
            keyName={"Grand Total"}
            value={2522.5}
            className={"text-xl font-bold mb-3"}
            normal
            pay
         />
         <ButtonPayment
            link="/checkout/payment"
            title={"Continue to payment"}
            disabled={!user}
         />
      </>
   );
}

const CheckoutLayout = () => {
   return (
      <PaymentLayout
         rightContent={<RightContentCheckout />}
         leftContent={<Outlet />}
      />
   );
};

export default CheckoutLayout;
