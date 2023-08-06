// list key and value
const Typography = ({
   keyName,
   value,
   pay,
   slate,
   className,
   normal,
   styleValue,
}) => {
   return (
      <div
         className={`flex py-1 justify-between capitalize w-full ${className} text-sm`}>
         <span className={normal ? "text-black" : "text-slate-400"}>
            {keyName}
         </span>
         <span
            className={`font-semibold ${
               slate && "text-slate-400"
            } ${styleValue}`}>
            {pay && "$"}
            {value}
         </span>
      </div>
   );
};

export default Typography;
