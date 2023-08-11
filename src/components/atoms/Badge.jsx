const Badge = ({ type, title }) => {
   function typing(tp) {
      switch (tp) {
         case "success":
            return "bg-emerald-100 border-emerald-100";
         case "warning":
            return "bg-yellow-100 border-yellow-100";
         case "info":
            return "bg-slate-100 border-slate-100";
         case "error":
            return "bg-red-100 border-red-100";
         default:
            return "bg-white border-slate-100";
      }
   }
   return (
      <span
         className={`${typing(
            type
         )} px-2 py-[3px] rounded-xl border w-max text-black text-xs h-max`}>
         {title}
      </span>
   );
};

export default Badge;
