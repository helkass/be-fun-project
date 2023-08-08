import { ButtonPayment } from "../atoms/Button";
import InputComponent from "../atoms/InputComponent";
import Typography from "../atoms/Typography";
import PaymentLayout from "./PaymentLayout";
import {
   Link,
   Navigate,
   Outlet,
   useLocation,
   useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RESTART_ALERT, createOrder } from "../../redux/orderReducer";
import { useEffect } from "react";

function RightContentCheckout() {
   const { user, cart, order } = useSelector((state) => state);
   const userStatus = user !== null ? user.logIn : false;
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
   const loc = location.pathname.split("/");

   function handleOrder() {
      dispatch(createOrder());
   }

   function getDisabled() {
      if (loc.includes("payment")) {
         const keyExist = Object.getOwnPropertyNames(order.orders);

         if (keyExist.includes("payment_details")) {
            return false;
         }

         return true;
      }
      return order.orders == null;
   }

   useEffect(() => {
      if (order.status) {
         setTimeout(() => {
            dispatch(RESTART_ALERT());
            navigate("/notification");
         }, 3000);
      }
   }, [order]);

   const discount = 0;
   return (
      <>
         <strong>Your Order</strong>
         {cart.carts.length > 0 ? (
            cart.carts.map((cart) => (
               <div
                  key={cart.id}
                  className="flex gap-2 flex-nowrap border-b border-dashed pb-2">
                  <img
                     src={cart.image}
                     alt="img"
                     className="w-[60px] h-[60px] object-cover"
                  />
                  <div className="flex flex-col gap-1 text-sm">
                     <p className="line-clamp-1 font-semibold w-10/12 capitalize">
                        {cart.product_name}
                     </p>
                     {cart.details.map((detail) => (
                        <div className="flex gap-x-1" key={detail.id}>
                           <p className="text-slate-400">{detail.color}</p>
                           <p>x {detail.detail_quantity}</p>
                        </div>
                     ))}
                  </div>
                  <strong>${cart.totalAmount}</strong>
               </div>
            ))
         ) : (
            <Navigate to="/products" replace />
         )}
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
            {!userStatus && (
               <p className="text-sm whitespace-nowrap gap-x-1 mt-3 flex flex-wrap">
                  <strong>New customer?</strong>{" "}
                  <Link className="underline" to={"/signup"}>
                     Sign up
                  </Link>{" "}
                  to get better offer
               </p>
            )}
         </div>
         <div className="border-b border-dashed pb-3">
            <Typography keyName={"Subtotal"} value={cart.cartTotalAmount} pay />
            <Typography keyName={"Discount"} value={discount} slate pay />
            <Typography keyName={"Shipping cost"} value={22.5} slate pay />
         </div>
         <Typography
            keyName={"Grand Total"}
            value={cart.cartTotalAmount - discount}
            className={"text-xl font-bold mb-3"}
            normal
            pay
         />
         {!loc.includes("payment") ? (
            <ButtonPayment
               link="/checkout/payment"
               title={"Continue to payment"}
               disabled={getDisabled()}
            />
         ) : (
            <ButtonPayment title={"Order"} handleClick={handleOrder} />
         )}
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
