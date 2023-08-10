const Text = ({ children, size, active, primary, center }) => {
   function sizing(t) {
      let str = "text-";
      return str + t;
   }
   return (
      <span
         className={`${sizing(size) || "text-sm"} ${
            active
               ? primary
                  ? "text-red-700"
                  : "text-black"
               : "text-slate-600"
         } ${center && "text-center"}`}>
         {children}
      </span>
   );
};

export default Text;
