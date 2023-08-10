import { Link } from "react-router-dom";

const BtnIcon = ({ Icon, title, link, active, type }) => {
   if (link) {
      return (
         <Link to={link}>
            <Button active={active}>
               {type == "img" ? (
                  <img
                     src={Icon}
                     alt="test"
                     className="w-[40px] h-[40px] object-cover"
                  />
               ) : (
                  <Icon size={20} />
               )}
               {title && <span>{title}</span>}
            </Button>
         </Link>
      );
   }
   return (
      <Button active={active}>
         <Icon size={19} />
         {title && <span>{title}</span>}
      </Button>
   );
};

export const Button = ({ children, onClick, active, className }) => {
   return (
      <button
         onClick={onClick}
         className={`flex flex-col capitalize items-center gap-1 relative text-sm justify-center gap-x-2 py-1 ${className} ${
            active ? "text-black" : "text-slate-500"
         }`}>
         {children}
      </button>
   );
};

export default BtnIcon;
