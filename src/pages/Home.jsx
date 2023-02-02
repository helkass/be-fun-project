import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Products from "../components/products/Products";
import Layout from "../template/Layout";
import Address from "../components/adress/Adress";

const Home = () => {
   return (
      <Layout>
         <Hero />
         <About />
         <Products />
         <Address />
      </Layout>
   );
};

export default Home;
