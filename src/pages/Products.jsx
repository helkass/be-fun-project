import { Categories, Products as ShowProducts } from "../components";
import ProductsLayout from "../components/layout/ProductsLayout";

const Products = () => {
   return (
      <ProductsLayout>
         <div className="flex gap-3 flex-col sm:flex-row container min-h-screen !mt-9">
            <Categories />
            <ShowProducts />
         </div>
      </ProductsLayout>
   );
};

export default Products;
