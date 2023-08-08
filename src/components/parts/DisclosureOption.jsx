import InputComponent, { RadioInput } from "../atoms/InputComponent";

const DisclosureOption = ({
   handleChecked,
   checked,
   name,
   title,
   radioName,
   card_cvvChange,
   card_nameChange,
   card_expiration_dateChange,
   card_numberChange,
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
               <InputComponent
                  name={"card_number"}
                  handleChange={card_numberChange}
                  placeholder={"Card Number"}
                  type={"number"}
                  min={12}
                  max={15}
               />
               <InputComponent
                  name={"card_name"}
                  handleChange={card_nameChange}
                  placeholder={"Name on card"}
               />
               <div className="flex gap-3">
                  <InputComponent
                     name={"expiration_date"}
                     handleChange={card_expiration_dateChange}
                     placeholder={"Expiration Date (MM/YY)"}
                  />
                  <InputComponent
                     placeholder={"CVV"}
                     name={"cvv"}
                     type={"number"}
                     min={3}
                     max={4}
                     handleChange={card_cvvChange}
                  />
               </div>
            </div>
         )}
      </div>
   );
};

export default DisclosureOption;
