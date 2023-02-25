import React from "react";
import Card from "../../components/parts/card/Card";
import "./products.css";
import dataCoffee from "../../api/fake.json";
import ButtonIcon from "../../components/parts/button/ButtonIcon";
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/cart/cartReducer";
import ALert from "../../components/parts/alert/ALert";

function productLists() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cartItems } = useSelector((state) => state.cart);
   const [alert, setAlert] = React.useState(false);
   // handle add to cart product
   const addToCart = (event) => {
      dispatch(addCart(event));
      setAlert(true);

      setTimeout(() => {
         setAlert(false);
      }, 1500);
   };

   return (
      <section id="products">
         <ALert title="add to cart" active={alert} />
         <div className="product--content">
            <div className="button--to--cart">
               <span className="button--cart--quantity">
                  {cartItems.length}
               </span>
               <ButtonIcon
                  icon={BsCartFill}
                  sizeIcon={25}
                  onClick={() => navigate("/carts")}
               />
            </div>
            <div className="product--list">
               {dataCoffee?.map((coffee) => (
                  <Card
                     key={coffee.id}
                     title={coffee.title}
                     image={coffee.image}
                     description={coffee.description}
                     onAddCart={() => addToCart(coffee)}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default productLists;
