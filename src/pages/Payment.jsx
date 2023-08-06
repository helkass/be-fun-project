import { useState } from "react";
import DisclosureOption from "../components/parts/DisclosureOption";
import InputComponent from "../components/atoms/InputComponent";

const shippingMethods = [
   {
      for: "payment",
      name: "credit_card",
      title: "Credit card",
   },
   {
      for: "payment",
      name: "paypal",
      title: "Paypal",
   },
   {
      for: "payment",
      name: "neteller",
      title: "Neteller",
   },
];

const countries = ["indonesia", "malaysia", "germany", "USA"];

const Payment = () => {
   const [payment, setPayment] = useState("credit_card");
   const handleChecked = (id) => {
      setPayment(id);
   };
   return (
      <>
         <Wrapper>
            <strong>Select payment method</strong>
            {shippingMethods.map((pay, idx) => (
               <DisclosureOption
                  key={idx}
                  handleChecked={() => handleChecked(pay.name)}
                  checked={payment}
                  name={pay.name}
                  title={pay.title}
                  radioName={pay.for}
               />
            ))}
         </Wrapper>
         <Wrapper>
            <strong>Billing address</strong>
            <label htmlFor="same-address" className="text-sm flex gap-3">
               <input type="checkbox" name="same-address" />
               <span>Same as my shipping address</span>
            </label>
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
               <InputComponent name={"city"} label={"City"} readOnly required />
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
            <InputComponent
               select
               options={countries}
               label={"Select shipping country"}
               name={"country"}
            />
         </Wrapper>
      </>
   );
};

const Wrapper = ({ children }) => {
   return (
      <div className="border rounded p-3 flex flex-col gap-3">{children}</div>
   );
};

export default Payment;
