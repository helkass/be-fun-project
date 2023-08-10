import { Link } from "react-router-dom";
import Col from "./Flex/Col";
import { RiArrowRightSLine } from "react-icons/ri";

const SectionTitle = ({ title, subtitle, link, normal }) => {
   return (
      <div className="flex capitalize justify-between px-2">
         <Col size={"sm"}>
            <h5 className="font-semibold text-md">{title}</h5>
            {subtitle && (
               <span className="text-slate-400 text-xs">{subtitle}</span>
            )}
         </Col>
         <Link
            to={link}
            className={`${
               normal ? "text-black" : "text-red-700"
            } flex flex-nowrap whitespace-nowrap items-center gap-2 text-xs`}>
            lihat semua <RiArrowRightSLine size={20} />
         </Link>
      </div>
   );
};

export default SectionTitle;
