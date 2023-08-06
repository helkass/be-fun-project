import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Typography from "../components/atoms/Typography";
import { ButtonPayment } from "../components/atoms/Button";

const Notifications = () => {
   const email = "helkaseptyawan@gmail.com";
   return (
      <section className="my-12">
         <div className="max-w-[700px] mx-auto">
            <div className="border rounded p-3 mx-2">
               <div className="flex justify-center items-center gap-3 mb-4 text-center flex-col">
                  <span className="text-emerald-500">
                     <AiOutlineCheckCircle size={60} />
                  </span>
                  <h2 className="text-2xl font-bold">Thanks for your order!</h2>
                  <span className="text-sm text-slate-400">
                     The order confirmation has been sent to {email}
                  </span>
               </div>
               <Wrapper>
                  <ListComponent keyName="Transaction Date" value={Date()} />
               </Wrapper>
               <Wrapper>
                  <ListComponent
                     keyName="Peyment method"
                     value={"Credit card"}
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
                  <div className="flex gap-2 flex-nowrap border-b border-dashed pb-2">
                     <img
                        src="/images/2.jpg"
                        alt="img"
                        className="w-[60px] h-[60px] object-cover"
                     />
                     <div className="flex flex-col gap-1 text-sm">
                        <p className="line-clamp-1 font-semibold w-10/12 capitalize">
                           cahier letter lorehvihrgh ehfgir
                        </p>
                        <p className="text-slate-400">grey</p>
                        <p>x 1</p>
                     </div>
                     <strong>$2000</strong>
                  </div>
               </Wrapper>
               <Wrapper>
                  <Typography keyName={"Subtotal"} value={2500} pay normal />
               </Wrapper>
               <Wrapper>
                  <Typography
                     keyName={"Grand total"}
                     value={2500}
                     className={"text-black text-xl font-bold"}
                     pay
                     normal
                  />
               </Wrapper>
               <ButtonPayment title={"Continue shopping"} link={"/products"} />
            </div>
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
      <div className="flex flex-col gap-2">
         <p className="font-semibold">{keyName}</p>
         <span className="text-sm text-slate-400">{value}</span>
      </div>
   );
};

export default Notifications;
