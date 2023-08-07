const InputComponent = ({
   readOnly,
   required,
   name,
   label,
   type,
   placeholder,
   select,
   options,
   handleChange,
   handleKeyUp,
}) => {
   if (select) {
      return (
         <label htmlFor={name} className="w-full flex flex-col gap-2">
            <span className="font-semibold text-sm">
               {label}
               {required && "*"}
            </span>
            <select
               name={name}
               className={`border focus:outline-none rounded border-slate-100 w-full p-2`}>
               {options?.map((opt, idx) => (
                  <option key={idx} value={opt}>
                     {opt}
                  </option>
               ))}
            </select>
         </label>
      );
   }
   return (
      <label htmlFor={name} className="w-full text-left flex flex-col gap-2">
         <span className="font-semibold text-sm">
            {label}
            {required && "*"}
         </span>
         <input
            onChange={handleChange}
            name={name}
            type={type || "text"}
            placeholder={placeholder}
            onKeyUp={handleKeyUp}
            className={`${
               readOnly && "bg-slate-50"
            } border focus:outline-none rounded placeholder:text-sm border-slate-100 w-full p-2`}
            readOnly={readOnly}
            required={required}
         />
      </label>
   );
};

export const RadioInput = ({
   name,
   subtitle,
   amount,
   title,
   Icon,
   radioName,
   handleChecked,
   checked,
}) => {
   return (
      <label
         htmlFor={name}
         onClick={handleChecked}
         className="flex gap-3 p-3 justify-between border rounded">
         <div className="flex gap-3">
            <input
               className="w-[15px] h-[15px]"
               type="radio"
               checked={checked == name}
               name={radioName}
               readOnly
               value={name}
            />
            <span className="flex flex-col text-left gap-1">
               <span className="font-semibold">{title}</span>
               <span className="text-sm text-slate-400">
                  {subtitle} business days
               </span>
            </span>
         </div>
         {amount && <span className="font-semibold">${amount}</span>}
         {Icon && <Icon />}
      </label>
   );
};

export default InputComponent;
