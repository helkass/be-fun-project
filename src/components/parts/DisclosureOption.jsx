import InputComponent, { RadioInput } from "../atoms/InputComponent";

const DisclosureOption = ({
   handleChecked,
   checked,
   name,
   title,
   radioName,
}) => {
   return (
      <div className="transition-all ease-in-out duration-300 flex flex-col border rounded">
         <RadioInput
            handleChecked={handleChecked}
            checked={checked}
            name={name}
            title={title}
            radioName={radioName}
         />
         {checked == name && (
            <div className="flex flex-col gap-2 px-3 transition-all ease-in-out duration-300 pb-3">
               <InputComponent placeholder={"Card Number"} />
               <InputComponent placeholder={"Name on card"} />
               <div className="flex gap-3">
                  <InputComponent placeholder={"Expiration Date (MM/YY)"} />
                  <InputComponent placeholder={"CVV"} />
               </div>
            </div>
         )}
      </div>
   );
};

export default DisclosureOption;
