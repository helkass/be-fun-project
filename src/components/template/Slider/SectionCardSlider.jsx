import React from "react";
import Col from "../Flex/Col";
import { Link } from "react-router-dom";
import { AiOutlineForward } from "react-icons/ai";

const SectionCardSlider = ({ title, link, slides }) => {
   return (
      <Col size={"md"}>
         <div className="flex justify-between items-center">
            <p>{title}</p>
            <Link to={link}>
               <span className="text-red-700 whitespace-nowrap flex flex-nowrap items-center gap-1 text-sm">
                  Lihat Semua
                  <AiOutlineForward />
               </span>
            </Link>
         </div>
         <div className="w-full overflow-auto">
            <div className="flex flex-nowrap gap-3">
               {slides?.map((card, idx) => (
                  <Card key={idx}>
                     <span className="z-1 w-9/12">{card.title}</span>
                  </Card>
               ))}
            </div>
         </div>
      </Col>
   );
};

const Card = ({ children }) => {
   return (
      <div className="min-w-[320px] card-cs relative overflow-hidden z-1 bg-white my-2 rounded-lg min-h-[160px] py-3 px-4 flex justify-between items-center">
         {children}
      </div>
   );
};

export default SectionCardSlider;
