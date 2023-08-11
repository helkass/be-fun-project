const BtnFilter = ({ onClick, title, active }) => {
   return (
      <button
         onClick={onClick}
         className={` px-3 py-2 text-xs whitespace-nowrap border rounded-2xl ml-2 ${
            active
               ? "bg-gradient-to-r from-black to-cyan-900 border-black text-white"
               : " text-slate-400 bg-white border-slate-100"
         }`}>
         {title}
      </button>
   );
};

export default BtnFilter;
