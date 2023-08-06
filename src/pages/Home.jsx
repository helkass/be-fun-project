import {
   Brands,
   CurratedPicks,
   Experience,
   FeaturedProducts,
   Hero,
   Subscribe,
} from "../components";

const Home = () => {
   return (
      <>
         <Hero />
         <Brands />
         <Experience />
         <CurratedPicks />
         <FeaturedProducts />
         <Subscribe />
      </>
   );
};

export default Home;
