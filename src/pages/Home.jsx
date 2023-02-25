import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Address from "../components/adress/Adress";

const Home = () => {
   return (
      <>
         <Hero />
         <About />
         <Products />
         <Address />
      </>
   );
};

export default Home;
