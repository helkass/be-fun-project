import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const Card = ({
   image,
   id,
   title,
   firstAmount,
   lastAmount,
   discount,
   type,
   amount,
   sizes,
   colors,
}) => {
   if (type === "details") {
      return (
         <LayoutCard image={image} id={id}>
            <div className="flex flex-col gap-2 capitalize">
               <p>{title}</p>
               {colors && (
                  <span className="text-slate-400 text-sm">
                     colors {colors?.length || 0}
                  </span>
               )}
            </div>
            {/* if discount true */}
            {discount && (
               <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">${lastAmount}</p>
                  <span className="text-slate-400 text-sm line-through">
                     ${firstAmount}
                  </span>
               </div>
            )}
            {amount && <p className="font-bold text-lg">${amount}</p>}
         </LayoutCard>
      );
   }
   return (
      <LayoutCard image={image} id={id}>
         <div className="flex flex-col gap-2 capitalize">
            <p>{title}</p>
            {/* if discount true */}
            {discount && (
               <div className="flex gap-1 flex-start">
                  <p className="font-bold text-lg">${lastAmount}</p>
                  <span className="text-slate-400 text-sm line-through">
                     ${firstAmount}
                  </span>
               </div>
            )}
            {amount && <p className="font-bold text-lg">${amount}</p>}
         </div>
         <button className="text-white h-max bg-black p-2 rounded">
            <BsCartPlus size={20} />
         </button>
      </LayoutCard>
   );
};

const LayoutCard = ({ children, image, id }) => {
   return (
      <Link to={`/products/${id.toString().replaceAll(" ", "-")}`}>
         <div className="p-3 rounded flex flex-col gap-3 shadow w-[250px] h-full">
            <div className="h-[260px] relative">
               <img src={image} className="object-cover h-full w-full" />
            </div>
            <div className="flex justify-between items-center">{children}</div>
         </div>
      </Link>
   );
};

export default Card;
