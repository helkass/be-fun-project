import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const navLists = ["products", "most_viewed", "new_arrival", "brands"];

const Navbar = () => {
   const [offer, setOffer] = useState(true);
   const [isNavbar, setIsNavbar] = useState(false);
   const [isSearch, setIsSearch] = useState(false);
   const { pathname } = useLocation();
   // get cart data
   const cartState = useSelector((state) => state.cart);

   const handleSearch = () => {
      setIsNavbar(false);
      setIsSearch(!isSearch);
   };

   const handleNavbar = () => {
      setIsSearch(false);
      setIsNavbar(!isNavbar);
   };
   useEffect(() => {
      if (isNavbar) {
         setIsNavbar(false);
      } else {
         null;
      }
   }, [pathname]);
   return (
      <>
         {offer && (
            <div className="text-center text-xs bg-black text-white py-1">
               <div className="container relative">
                  <span>
                     Sign up and GET OFF for your first order | Sign up now{" "}
                  </span>
                  <button
                     onClick={() => setOffer(!offer)}
                     className="absolute right-3">
                     X
                  </button>
               </div>
            </div>
         )}

         {/* navbar | header */}
         <div className="flex justify-between z-50 container relative h-[56px] items-center shadow-sm">
            <div className="flex gap-3">
               <button className="xl:hidden" onClick={handleNavbar}>
                  <FaBars />
               </button>
               <Link to="/" className="text-xl font-bold">
                  <h2 className="whitespace-nowrap">Garden Clothes</h2>
               </Link>
            </div>
            <nav
               className={`${
                  isNavbar
                     ? "sm:-bottom-[100%] top-[80%] left-1 xl:bottom-0"
                     : "sm:-top-[150%] -left-[150%] xl:left-0 top-[80%] xl:top-0"
               } absolute xl:relative bg-white h-[400px] w-5/12 sm:w-max sm:h-[50px] xl:bg-transparent transition-all ease-in-out duration-300 z-50 xl:h-max px-7 xl:px-0 items-center flex flex-col sm:flex-row justify-center sm:gap-4 gap-10`}>
               {navLists.map((list, index) => (
                  <Link to={list} key={index}>
                     <span className="font-semibold capitalize">
                        {list.toString().replaceAll("_", " ")}
                     </span>
                  </Link>
               ))}
            </nav>

            {/* search */}
            <div className="flex justify-center gap-4 items-center">
               <button
                  className="md:hidden block px-2 py-1"
                  onClick={handleSearch}>
                  <FaSearch />
               </button>
               <label
                  htmlFor="search"
                  className={`${
                     isSearch
                        ? "sm:-bottom-[100%] -bottom-[60%] xl:bottom-0 right-1"
                        : "-top-[150%] right-0"
                  } absolute sm:relative z-40 transition-all ease duration-400 flex items-center gap-2 bg-slate-50 rounded text-black/50 py-2 px-3`}>
                  <FaSearch />
                  <input
                     name="input"
                     type="text"
                     placeholder="Search"
                     className="placeholder:text-sm bg-transparent text-black/70"
                  />
               </label>
               <Link to="/cart" className="relative text-md">
                  <AiOutlineShopping size={22} />
                  {cartState.cartTotalQuantity > 0 && (
                     <span className="absolute -top-2 text-xs -right-1 bg-black text-white rounded-lg py-[2px] px-1">
                        {cartState.cartTotalQuantity}
                     </span>
                  )}
               </Link>
               <Link to="/user/hk">
                  <AiOutlineUser size={22} />
               </Link>
            </div>
         </div>
      </>
   );
};

export default Navbar;
