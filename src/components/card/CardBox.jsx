import { Link } from "react-router-dom";
import Col from "../template/Flex/Col";

const CardBox = ({ image, overlay }) => {
   return (
      <div
         className={`card-box bg-white ${!overlay ? "" : "card-box-overlay"}`}>
         {image ? (
            <img src={image} alt="image box" className="w-full h-full" />
         ) : (
            <h2>title</h2>
         )}
      </div>
   );
};

export const CardBoxAndTitle = ({ image, title, point, link }) => {
   return (
      <Link to={link}>
         <Col size={"md"}>
            <CardBox image={image} />
            <div className="flex line-clamp-2 flex-col text-sm gap-3">
               <span>{title}</span>
               {point && (
                  <span className="text-red-600 font-semibold">
                     {point} Point
                  </span>
               )}
            </div>
         </Col>
      </Link>
   );
};

export default CardBox;
