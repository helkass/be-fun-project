import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <section className="container relative py-8 !mt-6 sm:!mt-0">
         <div className="sm:h-[360px] h-[400px] xl:h-[500px] relative rounded-md overlay-cs">
            <img
               src="./images/1.jpg"
               className="h-full rounded-md w-full object-cover"
            />
            <div className="absolute top-0 bottom-0 w-10/12 z-10 mx-auto flex flex-col gap-7 right-0 left-0 justify-center items-center">
               <h1 className="sm:text-5xl text-3xl xl:text-7xl text-center font-bold text-white">
                  Level up your style with our summer collections
               </h1>
               <Link
                  to="/products"
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded">
                  Shop now
                  <HiArrowNarrowRight />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Hero;
