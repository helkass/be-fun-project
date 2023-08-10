import { Link } from "react-router-dom";

const BtnCard = ({ children, link, card, type, onClick, className }) => {
   if (link) {
      return (
         <Link to={link}>
            <BtnFO card={card} type={type} className={className}>
               {children}
            </BtnFO>
         </Link>
      );
   }

   return (
      <BtnFO card={card} type={type} className={className} onClick={onClick}>
         {children}
      </BtnFO>
   );
};

const BtnFO = ({ type, children, onClick, card, className }) => {
   return (
      <button
         onClick={onClick}
         className={`border rounded-full ${className} ${
            type == "outline"
               ? "text-red-700 bg-transparent"
               : "text-white bg-red-600"
         } text-sm flex justify-center mx-auto ${
            card && "w-10/12 md:w-7/12"
         } py-[7px] border-red-500 px-4 mb-2`}>
         {children}
      </button>
   );
};

export default BtnCard;
