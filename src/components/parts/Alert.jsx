import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { PiWarningOctagon } from "react-icons/pi";
const Alert = ({ type, title, message, show }) => {
   function color() {
      switch (type) {
         case "error":
            return "text-red-600";
         case "success":
            return "text-green-600";
         case "warning":
            return "text-yellow-600";
         case "info":
            return "text-blue-600";
         default:
            return "text-slate-400";
      }
   }
   return (
      <div
         className={`absolute flex gap-3 dark:bg-transparent font-semibold bg-white min-w-[220px] p-2 rounded transition-all ease-in-out duration-300 shadow ${color()} ${
            !show && "-left-[150%]"
         }`}>
         {type == "warning" && (
            <AiFillWarning size={20} className="text-yellow-600" />
         )}
         {type == "success" && (
            <AiFillCheckCircle size={20} className="text-green-600" />
         )}
         {type == "error" && (
            <RiErrorWarningFill size={20} className="text-red-600" />
         )}
         {type == "info" && (
            <PiWarningOctagon size={20} className="text-blue-600" />
         )}
         <div className="flex flex-col gap-1 text-sm">
            <p className="text-slate-800">{title}</p>
            <p>{message}</p>
         </div>
      </div>
   );
};

export default Alert;
