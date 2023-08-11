import { FaArrowLeft } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchBar = ({ handleChange, handleSubmit, handleBack }) => {
   const [inputValue, setInputValue] = useState("");
   const [showBtnClose, setShowBtnClose] = useState(false);

   const handleChangeLocal = (e) => {
      const v = e.target.value;
      setInputValue(v);
      handleChange(inputValue);
   };

   useEffect(() => {
      if (inputValue.length > 0) {
         setShowBtnClose(true);
      } else {
         setShowBtnClose(false);
      }
   }, [inputValue]);

   return (
      <div className="flex gap-4 items-center w-full">
         <button
            onClick={handleBack}
            className="rounded-full text-md text-black">
            <FaArrowLeft size={20} />
         </button>
         <div className="text-slate-500 border-gray-200 w-full gap-2 px-3 py-1 bg-slate-50 border rounded-full flex">
            <form onSubmit={handleSubmit} className="w-full">
               <label htmlFor="search" className="flex items-center gap-3">
                  <BiSearch size={20} />
                  <input
                     onChange={handleChangeLocal}
                     name="search"
                     required
                     value={inputValue}
                     className="placeholder:text-xs border-none focus:outline-none w-full bg-transparent text-sm"
                     placeholder="cari paket / voucher disini"
                  />
               </label>
            </form>
            {showBtnClose && (
               <button
                  onClick={() => setInputValue("")}
                  className="flex items-center justify-center h-max">
                  <IoCloseCircleSharp size={20} />
               </button>
            )}
         </div>
      </div>
   );
};

export const BtnSearcher = ({ placeholder }) => {
   return (
      <div className="flex text-black text-sm w-full justify-between items-center gap-4 px-3">
         <Link to="/search" className="w-full">
            <button className="rounded-2xl px-4 py-2 w-full flex gap-3 items-center bg-white">
               <BiSearch size={20} />
               <span className="text-slate-400">{placeholder}</span>
            </button>
         </Link>
         <button className="rounded-full p-2 h-max bg-white">
            <BiFilterAlt size={20} />
         </button>
      </div>
   );
};

export default SearchBar;
