import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ButtonIcon from "./Button";

const QuantityComponent = ({ quantity, handleMinus, handlePlus }) => {
   return (
      <div className="flex flex-nowrap border rounded justify-center gap-1 w-max xl:px-2 px-1 py-1 items-center">
         <ButtonIcon handleClick={handleMinus} Icon={AiOutlineMinus} />
         <span className="px-3 h-full flex items-center justify-center">
            {quantity}
         </span>
         <ButtonIcon handleClick={handlePlus} Icon={AiOutlinePlus} />
      </div>
   );
};

export default QuantityComponent;
