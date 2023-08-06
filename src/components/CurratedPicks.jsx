import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import img_4 from "../assets/images/4.jpg";

const picks = [
   {
      image: img_1,
      title: "best seller",
   },
   {
      image: img_2,
      title: "shop men",
   },
   {
      image: img_4,
      title: "shop women",
   },
   {
      image: img_3,
      title: "shop casual",
   },
];

const CurratedPicks = () => {
   return (
      <section id="picks" className="mb-12">
         <div className="container flex flex-col gap-7">
            <h5 className="text-2xl font-bold">Currated Picks</h5>
            <div className="overflow-hidden">
               <div className="flex justify-center gap-3 sm:gap-5 flex-wrap xl:gap-8 sm:flex-nowrap">
                  {picks.map((li, index) => (
                     <div
                        key={index}
                        className="relative w-[180px] sm:w-[240px] h-[240px] rounded overflow-hidden overlay-cs">
                        <img
                           src={li.image}
                           alt={li.title}
                           className="w-full h-full object-cover rounded-md"
                        />
                        <Link
                           to={li.title.toString().replaceAll(" ", "-")}
                           className="bg-white z-10 rounded-md py-3 flex justify-between items-center px-2 w-10/12 mx-auto absolute bottom-4 left-0 right-0">
                           {li.title}
                           <HiArrowNarrowRight />
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default CurratedPicks;
