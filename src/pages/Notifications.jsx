import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Typography from "../components/atoms/Typography";
import { ButtonPayment } from "../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeTransactionHistory } from "../redux/orderReducer";
import { Navigate } from "react-router-dom";

const Notifications = () => {
   const order = useSelector((state) => state.order);
   const cart = useSelector((state) => state.cart);
   const { data_user, response_transaction } = order.orders;

   const dispatch = useDispatch();
   const handleRemove = () => {
      dispatch(removeTransactionHistory());
   };
   return (
      <section className="my-12">
         <div className="max-w-[700px] mx-auto">
            {response_transaction !== null ? (
               <div className="border rounded p-3 mx-2">
                  <div className="flex justify-center items-center gap-3 mb-4 text-center flex-col">
                     <span className="text-emerald-500">
                        <AiOutlineCheckCircle size={60} />
                     </span>
                     <h2 className="text-2xl font-bold">
                        Thanks for your order!
                     </h2>
                     <span className="text-sm text-slate-400">
                        The order confirmation has been sent to{" "}
                        {data_user.email}
                     </span>
                  </div>
                  <Wrapper>
                     <ListComponent keyName="Transaction Date" value={Date()} />
                  </Wrapper>
                  <Wrapper>
                     <ListComponent
                        keyName="Peyment method"
                        value={response_transaction?.payment_details?.type
                           .toString()
                           .replace("_", " ")}
                     />
                  </Wrapper>
                  <Wrapper>
                     <ListComponent
                        keyName="Shipping method"
                        value={"Express delevery (1-3 bussiness days)"}
                     />
                     <h5 className="text-lg font-semibold">TRACK ORDER</h5>
                  </Wrapper>
                  <Wrapper>
                     {cart?.carts.map((item) => (
                        <div
                           key={item.id}
                           className="flex gap-2 flex-nowrap border-b border-dashed pb-2">
                           <img
                              src={item.image}
                              alt="img"
                              className="w-[60px] h-[60px] object-cover"
                           />
                           <div className="flex flex-col gap-1 text-sm w-full">
                              <p className="line-clamp-1 font-semibold w-10/12 capitalize">
                                 {item.product_name}
                              </p>
                              {item.details.map((detail) => (
                                 <div className="flex gap-1" key={detail.id}>
                                    <p className="text-slate-400">
                                       {detail.color}
                                    </p>
                                    <p>x {detail.detail_quantity}</p>
                                 </div>
                              ))}
                           </div>
                           <strong>${item.totalAmount}</strong>
                        </div>
                     ))}
                  </Wrapper>
                  <Wrapper>
                     <Typography
                        keyName={"Subtotal"}
                        value={response_transaction?.gross_amount}
                        pay
                        normal
                     />
                  </Wrapper>
                  <Wrapper>
                     <Typography
                        keyName={"Grand total"}
                        value={response_transaction?.gross_amount}
                        className={"text-black text-xl font-bold"}
                        pay
                        normal
                     />
                  </Wrapper>
                  <ButtonPayment
                     handleClick={handleRemove}
                     title={"Continue shopping"}
                     link={"/products"}
                  />
               </div>
            ) : (
               <Navigate to="/" replace />
            )}
         </div>
      </section>
   );
};

const Wrapper = ({ children }) => {
   return (
      <div className="flex flex-col gap-2 py-3 border-b border-dashed">
         {children}
      </div>
   );
};

const ListComponent = ({ keyName, value }) => {
   return (
      <div className="flex flex-col gap-2 capitalize">
         <p className="font-semibold">{keyName}</p>
         <span className="text-sm text-slate-400">{value}</span>
      </div>
   );
};

export default Notifications;
