import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Card from "./parts/Card";
import { getProducts } from "../utils/getProducts";

const Products = () => {
   const [isFilter, setIsFilter] = useState(true);
   const [products, setProducts] = useState(null);

   const get = async () => {
      setProducts(await getProducts());
   };

   useEffect(() => {
      get();
   }, []);
   return (
      <div>
         <p className="text-sm text-slate-500">
            Showing <strong>9</strong> results from total{" "}
            <strong>{products?.length}</strong>
         </p>
         {isFilter && (
            <div className="flex gap-2 text-sm items-center mt-8">
               <p>Applied Filters:</p>
               <span className="px-3 py-1 rounded-xl border border-slate-200 flex items-center gap-2">
                  Tops
                  <button>
                     <AiOutlineClose />
                  </button>
               </span>
            </div>
         )}

         {/* products contents */}
         {products !== null && (
            <div className="flex gap-5 justify-center flex-wrap mt-6">
               {products.map((product) => (
                  <Card
                     key={product.id}
                     type="details"
                     image={product.image}
                     id={product.product_name}
                     title={product.product_name}
                     colors={product.colors}
                     discount={product.discount}
                     firstAmount={product.first_amount}
                     lastAmount={product.last_amount}
                     amount={product.amount}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default Products;
