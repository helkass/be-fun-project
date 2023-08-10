import Badge from "../atoms/Badge";

const CardProduct = (props) => {
   return (
      <div className="border-2 border-slate-200 rounded-xl overflow-hidden min-h-[330px] py-4 relative bg-gray-50">
         <img
            src={props.image}
            alt={props.title || "product image"}
            className="w-9/12 mx-auto object-cover"
         />
         <CardProductContent
            badgeTitle={props.badgeTitle}
            title={props.title}
            price={props.price}
            first_amount={props.first_amount}
            last_amount={props.last_amount}
            description={props.description}
         />
      </div>
   );
};

const CardProductContent = ({
   badgeTitle,
   title,
   price,
   first_amount,
   last_amount,
   description,
}) => {
   return (
      <div className="absolute bottom-0 min-h-[60%] w-full bg-white rounded-t-lg flex flex-col p-3 gap-3 text-xs">
         <Badge type={"info"} title={badgeTitle} />
         <strong>{title}</strong>
         <strong className="text-red-600">Rp{price}</strong>
         <div className="flex gap-1 flex-start text-xs w-10/12">
            <span className="text-slate-400">Rp{first_amount}</span>
            <span className="text-red-600">Discount Rp{last_amount}</span>
         </div>
         <p className="text-slate-400">{description}</p>
      </div>
   );
};

export default CardProduct;
