import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import QuantityComponent from "../components/atoms/QuantityComponent";
import Typography from "../components/atoms/Typography";
import ButtonIcon, { ButtonPayment } from "../components/atoms/Button";
import PaymentLayout from "../components/layout/PaymentLayout";

const LeftContentCart = () => {
   const cartState = useSelector((state) => state.cart);

   function handleRemoveAll() {}
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
            <WrapperCart
               image={"./images/2.jpg"}
               product_name={"produc-name"}
               price={200}
               size={"M"}
               color={"green"}
               quantity={0}
            />
         </div>
      </>
   );
};

const RightContentCart = () => {
   return (
      <>
         <Typography keyName={"subtotal"} value={20} pay />
         <Typography keyName={"discount"} value={0} pay slate />
         <Typography
            keyName={"grand total"}
            value={20}
            className={"!text-lg font-bold border-t mt-1 py-2"}
            pay
            normal
         />
         <ButtonPayment title={"checkout now"} link={"/checkout"} />
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
   handleRemove,
   quantity,
   price,
   size,
   color,
}) {
   return (
      <div className="flex gap-2 flex-nowrap pt-3 py-6 border-b border-slate-100">
         <div className="w-7/12 flex gap-2">
            <img
               src={image}
               alt="image-cart"
               className="w-[90px] h-[90px] object-contain"
            />
            <div className="flex flex-col gap-2 capitalize">
               <strong>{product_name}</strong>
               <div className="flex gap-2 text-sm text-slate-400">
                  <span>{size}</span>
                  <span>-</span>
                  <span>{color}</span>
               </div>
            </div>
         </div>
         <span className="w-3/12 flex flex-col gap-2 items-center justify-center">
            <QuantityComponent
               quantity={quantity}
               handleMinus={handleMinusQuantity}
               handlePlus={handlePlusQuantity}
            />
            <ButtonIcon
               Icon={RiDeleteBin5Line}
               title={"remove"}
               handleClick={handleRemove}
            />
         </span>
         <span className="w-3/12 text-center font-semibold text-lg">
            ${price}
         </span>
      </div>
   );
}

export default Cart;
