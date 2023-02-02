import React from "react";
import "./formCartStyles.css";

const FormCart = ({
   handlePromo,
   subTotal,
   shipping,
   totalQuantityItems,
   totalAmount,
}) => {
   return (
      <>
         <div className="input-promo">
            <input placeholder="Promo Code" type="text" />
            <button onClick={handlePromo}>Apply</button>
         </div>
         <div className="total-and-shipping">
            <div className="shipping-title">
               <p>SubTotal:</p>
               <p>${subTotal}</p>
            </div>
            <div className="shipping-title">
               <p>Shipping:</p>
               <span>${shipping}</span>
            </div>
         </div>
         <div className="form-checkout">
            <div>
               <p>Total {totalQuantityItems} items</p>
               <strong>$ {totalAmount}</strong>
            </div>
            <button>Checkout</button>
         </div>
      </>
   );
};

export default FormCart;
