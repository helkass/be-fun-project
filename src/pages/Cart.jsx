import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import QuantityComponent from "../components/atoms/QuantityComponent";
import Typography from "../components/atoms/Typography";
import ButtonIcon, { ButtonPayment } from "../components/atoms/Button";
import PaymentLayout from "../components/layout/PaymentLayout";
import {
   DECREMENT_DETAIL_QUANTITY,
   INCREMENT_DETAIL_QUANTITY,
   REMOVE_ALL,
} from "../redux/cartReducer";

const LeftContentCart = () => {
   const cartState = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   function handleRemoveAll() {
      dispatch(REMOVE_ALL());
   }
   function handlePlusQuantity(detailId, productId) {
      dispatch(INCREMENT_DETAIL_QUANTITY({ detailId, productId }));
   }
   function handleMinusQuantity(detailId, productId) {
      dispatch(DECREMENT_DETAIL_QUANTITY({ detailId, productId }));
   }

   return (
      <>
         <div className="flex justify-between items-centers pr-2 xl:pr-0">
            <h4 className="font-bold text-2xl">Cart</h4>
            <ButtonIcon
               Icon={RiDeleteBin5Line}
               title={"remove"}
               handleClick={handleRemoveAll}
            />
         </div>

         {/* cart content */}
         <div className="flex flex-col gap-3">
            <div className="flex gap-2 flex-nowrap font-semibold text-slate-400 pt-3 xl:py-6 sm:py-3 py-2 text-sm border-b border-slate-100">
               <span className="w-7/12">PRODUCTS</span>
               <span className="w-3/12 text-center justify-center items-center">
                  QUANTITY
               </span>
               <span className="w-3/12 text-center">PRICE</span>
            </div>
            {cartState?.carts.length >= 0 &&
               cartState.carts?.map((cart, index) => (
                  <WrapperCart
                     key={index}
                     image={cart.image}
                     product_name={cart.product_name}
                     totalAmount={cart.totalAmount}
                     details={cart.details}
                     handleMinusQuantity={(detailId) =>
                        handleMinusQuantity(detailId, cart.id)
                     }
                     handlePlusQuantity={(detailId) =>
                        handlePlusQuantity(detailId, cart.id)
                     }
                  />
               ))}
         </div>
      </>
   );
};

const RightContentCart = () => {
   const cart = useSelector((state) => state.cart);
   const discount = 0;
   return (
      <>
         <Typography keyName={"subtotal"} value={cart.cartTotalAmount} pay />
         <Typography keyName={"discount"} value={discount} pay slate />
         <Typography
            keyName={"grand total"}
            value={Number(cart.cartTotalAmount - discount)}
            className={"!text-lg font-bold border-t mt-1 py-2"}
            pay
            normal
         />
         <ButtonPayment
            disabled={cart.cartTotalAmount <= 0}
            title={"checkout now"}
            link={"/checkout"}
         />
      </>
   );
};

// root
const Cart = () => {
   return (
      <PaymentLayout
         leftContent={<LeftContentCart />}
         rightContent={<RightContentCart />}
      />
   );
};

export function WrapperPay({ children }) {
   return (
      <div className="flex flex-col gap-3 md:w-4/12 h-max border border-slate-100 rounded p-3">
         {children}
      </div>
   );
}

function WrapperCart({
   image,
   product_name,
   handleMinusQuantity,
   handlePlusQuantity,
   totalAmount,
   details,
}) {
   return (
      <div className="flex gap-2 flex-nowrap pt-3 py-6 border-b border-slate-100">
         <div className="w-10/12 flex gap-2">
            <img
               src={image}
               alt="image-cart"
               className="w-[90px] h-[90px] object-contain"
            />
            <div className="flex flex-col gap-2 capitalize w-full">
               <strong>{product_name}</strong>
               {details?.map((detail, idx) => (
                  <div
                     key={idx}
                     className="flex justify-between w-full items-center">
                     <div className="flex gap-2 text-sm text-slate-400">
                        <span>{detail.size}</span>
                        <span>-</span>
                        <span>{detail.color}</span>
                     </div>
                     <QuantityComponent
                        quantity={detail.detail_quantity}
                        handleMinus={() => handleMinusQuantity(detail.id)}
                        handlePlus={() => handlePlusQuantity(detail.id)}
                     />
                  </div>
               ))}
            </div>
         </div>
         <span className="w-3/12 text-center font-semibold text-lg">
            ${totalAmount}
         </span>
      </div>
   );
}

export default Cart;
