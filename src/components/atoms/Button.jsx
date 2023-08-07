import { Link } from "react-router-dom";

const ButtonIcon = ({ handleClick, Icon, title, className }) => {
   return (
      <button
         onClick={handleClick}
         className={`xl:h-[30px] xl:w-[30px] min-w-[25px] min-h-25px flex items-center hover:bg-slate-50 p-1 rounded gap-2 font-semibold capitalize text-sm justify-center ${className}`}>
         <Icon size={19} />
         {title && <span>{title}</span>}
      </button>
   );
};

export const ButtonPayment = ({ handleClick, type, title, link, disabled }) => {
   if (link) {
      const handleDisabled = (e) => {
         e.preventDefault();
      };
      return (
         <Link to={link} onClick={disabled && handleDisabled}>
            <button
               className={`w-full bg-black py-2 flex items-center text-white rounded text-sm justify-center ${
                  disabled &&
                  "cursor-not-allowed bg-slate-200 text-gray-400 border-slate-400"
               }`}>
               {title}
            </button>
         </Link>
      );
   }
   return (
      <button
         disabled={disabled}
         type={type}
         onClick={handleClick}
         className={`w-full bg-black py-2 flex items-center text-white border font-semibold rounded text-sm justify-center ${
            disabled &&
            "cursor-not-allowed bg-slate-200 text-gray-400 border-slate-400"
         }`}>
         {title}
      </button>
   );
};

export default ButtonIcon;
