import { useState } from "react";
import { getProducts } from "../utils/getProducts";
import { useEffect } from "react";
import Card from "./parts/Card";

const FeaturedProducts = () => {
   const [products, setProducts] = useState(null);
   const gets = async () => {
      setProducts(await getProducts());
   };

   useEffect(() => {
      gets();
   }, []);
   return (
      <section>
         <div className="container flex flex-col gap-7">
            <h5 className="font-bold text-2xl">Featured products</h5>
            <div className="overflow-hidden flex justify-center">
               <div className="flex gap-5 flex-nowrap py-3 overflow-auto">
                  {products?.map((product) => (
                     <Card
                        image={product.image}
                        id={product.id}
                        key={product.id}
                        discount={product.discount}
                        amount={product.amount}
                        firstAmount={product.first_amount}
                        lastAmount={product.last_amount}
                        title={product.product_name}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};
export default FeaturedProducts;
