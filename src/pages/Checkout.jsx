import { useState } from "react";
import InputComponent, { RadioInput } from "../components/atoms/InputComponent";

const countries = ["indonesia", "malaysia", "germany", "USA"];
const shippingMethods = [
   {
      for: "shipping",
      name: "free",
      title: "Free shipping",
      delevery: "7-30",
      cost: 0,
   },
   {
      for: "shipping",
      name: "regular",
      title: "Regular shipping",
      delevery: "3-14",
      cost: 7.5,
   },
   {
      for: "shipping",
      name: "express",
      title: "Express shipping",
      delevery: "1-3",
      cost: 22.5,
   },
];

const Checkout = () => {
   const [shippingMethod, setShippingMethod] = useState("free");
   function handleCheckShippingMethod(e) {
      setShippingMethod(e);
   }

   return (
      <>
         <div className="p-3 rounded border border-slate-100">
            <div className="border-b border-slate-100 pb-4">
               <InputComponent
                  select
                  options={countries}
                  label={"Select shipping country"}
                  name={"country"}
               />
            </div>
            <div className="flex flex-col gap-2 mt-7">
               <InputComponent
                  name={"fullname"}
                  label={"Fullname"}
                  readOnly
                  required
               />
               <div className="flex gap-3">
                  <InputComponent
                     name={"email"}
                     label={"Email address"}
                     readOnly
                     required
                  />
                  <InputComponent
                     name={"email-confirmation"}
                     label={"Confirmation email "}
                     readOnly
                     required
                  />
               </div>
               <InputComponent
                  name={"phone"}
                  label={"Phone number"}
                  readOnly
                  required
               />
               <InputComponent
                  name={"street"}
                  label={"Street name and house number"}
                  readOnly
                  required
               />
               <div className="flex gap-3">
                  <InputComponent
                     name={"city"}
                     label={"City"}
                     readOnly
                     required
                  />
                  <InputComponent
                     name={"region"}
                     label={"Region"}
                     select
                     options={countries}
                  />
               </div>
               <InputComponent
                  name={"postal_code"}
                  label={"Postal code"}
                  readOnly
                  required
               />
            </div>
         </div>
         <div className="p-3 rounded border border-slate-100 flex flex-col gap-3">
            <strong className="mb-3">Shipping methods</strong>
            {shippingMethods.map((shp, idx) => (
               <RadioInput
                  handleChecked={() => handleCheckShippingMethod(shp.name)}
                  checked={shippingMethod}
                  key={idx}
                  name={shp.name}
                  title={shp.title}
                  subtitle={shp.delevery}
                  amount={shp.cost}
                  radioName={shp.for}
               />
            ))}
         </div>
      </>
   );
};

export default Checkout;
