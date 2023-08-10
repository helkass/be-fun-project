import { Link } from "react-router-dom";
import { BiCheck, BiError } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const Alert = ({ type, link, title }) => {
   function types(tp) {
      if (tp == "error") {
         return "text-red-700 bg-red-50";
      } else if (tp == "success") {
         return "text-emerald-700 bg-emerald-500";
      } else if (tp == "info") {
         return "text-cyan-700 bg-cyan-50";
      }

      return "text-black bg-black-50";
   }

   if (link) {
      return (
         <Link to={link}>
            <div
               className={`${types(
                  type
               )} flex justify-between px-3 py-1 rounded-full mx-2 min-h-[35px] text-sm items-center`}>
               <span className="flex gap-2 items-center">
                  {type == "error" && <BiError size={18} />}
                  {type == "success" && <BiCheck size={18} />}
                  {type == "info" && <BiError size={18} />}
                  <p>{title}</p>
               </span>
               <IoIosArrowForward />
            </div>
         </Link>
      );
   }
   return <div>Alert</div>;
};

export default Alert;
