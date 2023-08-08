import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderForm } from "../redux/orderReducer";
import InputComponent, { RadioInput } from "../components/atoms/InputComponent";
import { ButtonPayment } from "../components/atoms/Button";

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
   const user = useSelector((state) => state.user);
   const [shippingMethod, setShippingMethod] = useState("free");
   const dispatch = useDispatch();
   const [form, setForm] = useState({
      country: "",
      fullname: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      region: "",
      postal_code: "",
      email_confirmation: "",
   });
   function handleCheckShippingMethod(e) {
      setShippingMethod(e);
   }

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prevState) => {
         return { ...prevState, [name]: value };
      });
   };

   const handleFormSubmit = () => {
      const { email_confirmation, ...rest } = form;
      dispatch(createOrderForm({ ...rest, shippingMethod }));
   };

   return (
      <>
         <div className="p-3 rounded border border-slate-100">
            <div className="border-b border-slate-100 pb-4">
               <InputComponent
                  select
                  options={countries}
                  label={"Select shipping country"}
                  name={"country"}
                  handleChange={handleChange}
               />
            </div>
            <div className="flex flex-col gap-2 mt-7">
               <InputComponent
                  name={"fullname"}
                  label={"Fullname"}
                  readOnly={user !== null ? false : true}
                  required
                  handleChange={handleChange}
               />
               <div className="flex gap-3">
                  <InputComponent
                     name={"email"}
                     label={"Email address"}
                     readOnly={user !== null ? false : true}
                     required
                     handleChange={handleChange}
                  />
                  <InputComponent
                     name={"email_confirmation"}
                     label={"Confirmation email "}
                     error={form.email !== form.email_confirmation}
                     required
                     handleChange={handleChange}
                  />
               </div>
               <InputComponent
                  handleChange={handleChange}
                  name={"phone"}
                  label={"Phone number"}
                  required
               />
               <InputComponent
                  name={"street"}
                  label={"Street name and house number"}
                  required
                  handleChange={handleChange}
               />
               <div className="flex gap-3">
                  <InputComponent
                     name={"city"}
                     handleChange={handleChange}
                     label={"City"}
                     required
                  />
                  <InputComponent
                     name={"region"}
                     label={"Region"}
                     select
                     handleChange={handleChange}
                     options={countries}
                  />
               </div>
               <InputComponent
                  name={"postal_code"}
                  label={"Postal code"}
                  required
                  handleChange={handleChange}
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
         <ButtonPayment handleClick={handleFormSubmit} title={"Submit Form"} />
      </>
   );
};

export default Checkout;
