import React from "react";
import "./cartOrganismStyles.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoMdRemoveCircle } from "react-icons/io";
const CartOrganism = ({
   cartImage,
   decrement,
   increment,
   title,
   desc,
   price,
   quantity,
   removeItem,
}) => {
   return (
      <div className="cart-items shadow">
         <button onClick={removeItem} className="cart-button-remove">
            <IoMdRemoveCircle size={30} />
         </button>
         <div className="cart-image">
            <img src={cartImage} />
         </div>
         <div className="cart-content">
            <div className="cart-content-art">
               <span className="cart-title">{title}</span>
               <span className="cart-desc">{desc}</span>
            </div>
            <div className="cart-calc">
               <p className="cart-item-price">${price}</p>
               <div className="cart-content-calc">
                  <button onClick={decrement}>
                     <AiOutlineMinus size={16} />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={increment}>
                     <AiOutlinePlus size={16} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartOrganism;
