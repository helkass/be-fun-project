import { BsCashCoin, BsShieldCheck } from "react-icons/bs";
import { MdOutlineUpdate } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";

const experienceLists = [
   {
      name: "original products",
      desc: "We provide money back guarantee if the product are not original",
      icon: BsCashCoin,
   },
   {
      name: "satisfaction guarantee",
      desc: "Exchange the product you've purchased if it doesn't fit on you",
      icon: BsShieldCheck,
   },
   {
      name: "new arrival everyday",
      desc: "We update our collections almost everyday",
      icon: MdOutlineUpdate,
   },
   {
      name: "fast & free shipping",
      desc: "We offer adn free shipping for our loyal customers",
      icon: LiaShippingFastSolid,
   },
];
const Experience = () => {
   return (
      <section className="my-24">
         <div className="container">
            <div className="flex justify-between flex-col sm:flex-row items-center">
               <h5 className="xl:text-2xl text-xl font-bold w-full sm:w-6/12 xl:w-3/12">
                  We provide best customer experience
               </h5>
               <div className="border-l-2 border-black h-[50px] flex items-center text-sm sm:pl-7 pl-2 text-slate-400">
                  <span>
                     We ensure our customer have the best shopping experience
                  </span>
               </div>
            </div>
            {/* contents cards */}
            <div className="overflow-hidden relative mt-12">
               <div className="flex justify-between gap-7 overflow-auto">
                  {experienceLists.map((ex, index) => {
                     const Icon = ex.icon;
                     return (
                        <div
                           key={index}
                           className="flex flex-col gap-4 max-w-[270px] min-w-[200px] hover:bg-gray-50 cursor-default hover:tansition-all hover:ease hover:duration-300 rounded p-2">
                           <span className="bg-slate-50 p-3 flex items-center rounded-md text-slate-400 w-max">
                              <Icon size={22} />
                           </span>
                           <h4 className="font-bold text-xl capitalize">
                              {ex.name}
                           </h4>
                           <span className="text-slate-400 text-sm">
                              {ex.desc}
                           </span>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
