import { useState } from "react";
import DisclosureOption from "../components/parts/DisclosureOption";
import InputComponent from "../components/atoms/InputComponent";
import { ButtonPayment } from "../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { createOrderPayment } from "../redux/orderReducer";
import { Alert } from "../components";

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
   const order = useSelector((state) => state.order);
   const dispatch = useDispatch();
   const [payment, setPayment] = useState("credit_card");
   const [isBillingAddress, setIsBillingAddress] = useState(false);
   const [form, setForm] = useState({
      card_number: 0,
      card_name: "",
      expiration_date: "",
      cvv: 0,
   });

   const [billingAddress, setBillingAddress] = useState({
      phone: "",
      street: "",
      city: "",
      region: "",
      postal_code: "",
      shipping_country: "",
   });

   const handleChecked = (id) => {
      setPayment(id);
   };

   const handleChangePayment = (e) => {
      const { name, value } = e.target;

      setForm((prevState) => {
         return {
            ...prevState,
            [name]: value,
         };
      });
   };

   const handleChangeBilling = (e) => {
      const { name, value } = e.target;

      setBillingAddress((prevState) => {
         return {
            ...prevState,
            [name]: value,
         };
      });
   };

   const handleSubmitForm = () => {
      dispatch(
         createOrderPayment({
            payment_details: {
               ...form,
               type: payment,
            },
            blling_address: { ...billingAddress },
         })
      );
   };

   const handleBillingAddress = (e) => {
      setIsBillingAddress(e.target.checked);

      const { fullname, email, ...rest } = order.orders.data_user;

      setBillingAddress((prevState) => {
         return {
            ...prevState,
            ...rest,
            shipping_country: rest.country,
         };
      });
   };

   return (
      <>
         <Alert
            show={order?.status !== null}
            type={order?.status ? "success" : "error"}
            title={"transaction status"}
            message={order?.message}
         />
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
                  card_cvvChange={handleChangePayment}
                  card_expiration_dateChange={handleChangePayment}
                  card_nameChange={handleChangePayment}
                  card_numberChange={handleChangePayment}
               />
            ))}
         </Wrapper>
         <Wrapper>
            <strong>Billing address</strong>
            <label htmlFor="same-address" className="text-sm flex gap-3">
               <input
                  type="checkbox"
                  onChange={handleBillingAddress}
                  name="same-address"
               />
               <span>Same as my shipping address</span>
            </label>
            <InputComponent
               name={"phone"}
               label={"Phone number"}
               readOnly={isBillingAddress}
               handleChange={handleChangeBilling}
               required
               defaultValue={billingAddress.phone}
            />
            <InputComponent
               name={"street"}
               label={"Street name and house number"}
               handleChange={handleChangeBilling}
               defaultValue={billingAddress.street}
               readOnly={isBillingAddress}
               required
            />
            <div className="flex gap-3">
               <InputComponent
                  handleChange={handleChangeBilling}
                  name={"city"}
                  defaultValue={billingAddress.city}
                  label={"City"}
                  readOnly={isBillingAddress}
                  required
               />
               <InputComponent
                  name={"region"}
                  label={"Region"}
                  defaultValue={billingAddress.region}
                  select
                  handleChange={handleChangeBilling}
                  options={countries}
               />
            </div>
            <InputComponent
               handleChange={handleChangeBilling}
               name={"postal_code"}
               defaultValue={billingAddress.postal_code}
               label={"Postal code"}
               readOnly={isBillingAddress}
               required
            />
            <InputComponent
               select
               handleChange={handleChangeBilling}
               options={countries}
               defaultValue={billingAddress.shipping_country}
               label={"Select shipping country"}
               name={"country"}
            />
         </Wrapper>
         <ButtonPayment handleClick={handleSubmitForm} title={"Submit Form"} />
      </>
   );
};

const Wrapper = ({ children }) => {
   return (
      <div className="border rounded p-3 flex flex-col gap-3">{children}</div>
   );
};

export default Payment;
