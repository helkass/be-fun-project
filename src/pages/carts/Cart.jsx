import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../template/Layout";
import CartOrganism from "../../components/organism/cart/CartOrganism";
import "./cartStyles.css";
import { BsCartXFill } from "react-icons/bs";
import {
   addCart,
   decrementCartItem,
   remove,
} from "../../features/cart/cartReducer";
import FormCart from "../../components/organism/formCart/FormCart";

function Cart() {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   const increment = (event) => {
      dispatch(addCart(event));
   };

   const decrement = (event) => {
      dispatch(decrementCartItem(event));
   };

   const removeItem = (event) => {
      dispatch(remove(event));
   };

   const handlePromo = () => {};
   return (
      <Layout>
         <main className="container">
            {cart.cartItems.length === 0 ? (
               <div className="emty-cart">
                  <p>emty cart</p>
                  <BsCartXFill size={25} />
               </div>
            ) : (
               <div className="main-cart ">
                  <div className="cart-list">
                     {cart?.cartItems.map((item) => (
                        <CartOrganism
                           key={item.id}
                           title={item.title}
                           desc={item.description}
                           increment={() => increment(item)}
                           decrement={() => decrement(item)}
                           price={item.price}
                           cartImage={item.image}
                           quantity={item.cartQuantity}
                           removeItem={() => removeItem(item.id)}
                        />
                     ))}
                  </div>
                  {/* right content */}
                  <div className="cart-right-content">
                     <FormCart
                        handlePromo={() => handlePromo()}
                        subTotal="5000"
                        shipping="2345"
                        totalQuantityItems="7"
                        totalAmount="1344"
                     />
                  </div>
               </div>
            )}
         </main>
      </Layout>
   );
}

export default Cart;
