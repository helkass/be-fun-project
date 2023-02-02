import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Products from "../pages/products";
import Cart from "../pages/carts/Cart";

const Router = () => {
   return (
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/carts" element={<Cart />} />
      </Routes>
   );
};

export default Router;
