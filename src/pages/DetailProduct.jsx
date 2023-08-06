import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../utils/getProducts";
import ProductsLayout from "../components/layout/ProductsLayout";
import { AiFillStar } from "react-icons/ai";
import { ADD_CART } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { BiSolidCheckbox } from "react-icons/bi";

const DetailProduct = () => {
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);
   const [details, setDetails] = useState("the_details");
   const [quantity, setQuantity] = useState(1);
   const [size, setSize] = useState(product !== null && product[0]?.sizes[0]);
   const params = useParams();

   const dispatch = useDispatch();

   // quantity add cart handler
   const handlePlusQuantity = () => setQuantity((prev) => prev + 1);
   const handleMinusQuantity = () => {
      if (quantity == 1) {
         return;
      } else {
         setQuantity((prev) => prev - 1);
      }
   };

   // handle add to carts
   const handleAddToCart = (e) => {
      e.preventDefault();
      // cart template
      const pCart = {
         id: product[0].id,
         product_name: product[0].product_name,
         details: {
            size: size,
            color: "green",
            detail_quantity: quantity,
         },
         amount: product[0].discount
            ? product[0].last_amount
            : product[0].amount,
      };

      dispatch(ADD_CART(pCart));
   };

   async function gets() {
      const response = await getProducts();

      // product details setter
      setProduct(
         response.filter(
            (d) => d.product_name.toString().replaceAll(" ", "-") == params.id
         )
      );
      setLoading(false);
   }

   useEffect(() => {
      gets();
   }, []);
   return (
      <ProductsLayout
         rootRoutes={
            !loading && product != null ? product[0]?.categories : null
         }>
         {!loading && product !== null && (
            <div className="flex flex-col gap-10 container !mt-12">
               <div className="flex gap-3 flex-col sm:flex-row">
                  <div className="flex flex-col sm:w-7/12 w-full xl:gap-3 h-max gap-2">
                     <img
                        src={product[0].image}
                        className="w-full h-full max-w-9/12 object-contain max-h-[380px] rounded"
                        alt={product[0].product_name}
                     />
                     <div className="flex gap-3 sm:flex-nowrap sm:justify-start justify-between">
                        {[0, 1, 2, 3].map((s, index) => (
                           <img
                              src={product[0].image}
                              key={index}
                              className="xl:w-[120px] xl:h-[120px] sm:h-[90px] sm:w-[90px] w-[80px] h-[80px] object-cover rounded"
                              alt={product[0].product_name}
                           />
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 h-max sm:w-5/12">
                     <div className="flex flex-col sm:gap-3 gap-1 border-b h-max w-full pb-5">
                        <h5 className="text-2xl font-bold capitalize">
                           {product[0].product_name}
                        </h5>
                        <div className="flex flex-nowrap gap-2">
                           {/* {createArrayRating.map((rat, i) => (
                        <AiFillStar color="yellow" key={i} />
                        ))} */}
                           <AiFillStar color="yellow" />
                           <AiFillStar color="yellow" />
                           <AiFillStar color="yellow" />
                           <AiFillStar color="yellow" />
                           <AiFillStar color="yellow" />
                        </div>
                        {product[0].amount && (
                           <h3 className="text-2xl font-bold capitalize">
                              ${product[0].amount}
                           </h3>
                        )}
                        {product[0].discount && (
                           <div className="flex flex-col gap-1">
                              <h3 className="text-2xl font-bold capitalize">
                                 ${product[0].last_amount}
                              </h3>
                              <span className="text-slate-400 line-through text-sm">
                                 ${product[0].first_amount}
                              </span>
                           </div>
                        )}
                     </div>
                     <div className="flex justify-start gap-10 border-b h-max w-full pb-5">
                        {/* sizes */}
                        <div className="flex flex-col gap-5">
                           <span>Available Size</span>
                           <div className="flex gap-3 flex-wrap">
                              {product[0]?.sizes.map((sz, i) => (
                                 <button
                                    onClick={() => setSize(sz)}
                                    key={i}
                                    className={`${
                                       size === sz
                                          ? "bg-black text-white border-transparent"
                                          : "bg-transparent"
                                    } uppercase text-sm w-[35px] h-[35px] border rounded-md`}>
                                    {sz}
                                 </button>
                              ))}
                           </div>
                        </div>
                        {/* colors */}
                        <div className="flex flex-col gap-5 w-1/2">
                           <span>Available Colors</span>
                           <div className="flex gap-3 flex-wrap">
                              {product[0].colors.map((str, index) => (
                                 <div
                                    key={index}
                                    className="flex flex-col gap-1 items-center">
                                    <BiSolidCheckbox color={str} size={20} />
                                    <input
                                       type="radio"
                                       name="color"
                                       className={`w-[20px] checked:bg-black text-black cursor-pointer outline-black h-[20px] border border-transparent`}
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     {/* manage cart */}
                     <div className="flex flex-col gap-5 border-b h-max w-full pb-5">
                        <p>
                           <strong>Last 1 left</strong> - make it yours!
                        </p>
                        <div className="flex gap-5">
                           <div className="flex flex-nowrap h-[40px] border rounded justify-center items-center">
                              <button
                                 onClick={handleMinusQuantity}
                                 className="h-[30px] w-[30px] flex items-center justify-center">
                                 -
                              </button>
                              <span className="border-r border-l px-3 h-full flex items-center justify-center">
                                 {quantity}
                              </span>
                              <button
                                 onClick={handlePlusQuantity}
                                 className="h-[30px] w-[30px] flex items-center justify-center">
                                 +
                              </button>
                           </div>
                           <button
                              disabled={size == null}
                              onClick={handleAddToCart}
                              className="bg-black disabled:bg-black/50 disabled:cursor-not-allowed h-[40px] px-5 text-white text-sm rounded">
                              Add to cart
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* details, descusions and rating and review */}
               <div className="flex flex-col gap-5 transition-all ease-in-out duration-300 mt-8">
                  <div className="flex w-full min-h-[40px] justify-between text-slate-400">
                     {listsButtonsDetails.map((li, i) => (
                        <button
                           key={i}
                           onClick={() => setDetails(li)}
                           className={`${
                              details == li
                                 ? "font-semibold text-black border-black"
                                 : "border-transparent"
                           } w-full capitalize text-sm sm:text-md whitespace-nowrap border-b-2 hover:bg-gray-50`}>
                           {li.toString().replaceAll("_", " ")}
                        </button>
                     ))}
                  </div>
                  <strong className="text-xl capitalize">
                     {details.toString().replaceAll("_", " ")}
                  </strong>
                  {!loading && product != null && (
                     <div className="border border-slate-100 transition-all ease-in-out duration-200 p-5 rounded">
                        {/* the details */}
                        {details == "the_details" && (
                           <p>{product[0]?.details}</p>
                        )}
                        {details == "ratings_&_reviews" && <p>coming soon</p>}
                        {details == "discusions" && <p>coming soon</p>}
                     </div>
                  )}
               </div>
            </div>
         )}
      </ProductsLayout>
   );
};

const listsButtonsDetails = ["the_details", "ratings_&_reviews", "discusions"];

export default DetailProduct;
