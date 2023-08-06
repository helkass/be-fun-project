import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <footer className="bg-slate-50 md:py-20 sm:py-18 py-10 border-b border-black\50">
            <div className="flex justify-between flex-col gap-5 sm:flex-row container text-sm">
               <div className="w-full sm:w-6/12">
                  <h2 className="text-xl font-bold">Garden Clothes</h2>
                  <p className="text-slate-400 text-sm">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Tempora ullam eaque non nesciunt sed quam.
                  </p>
               </div>
               <div className="flex justify-between flex-wrap gap-7">
                  {footerLists.map((list, index) => (
                     <div key={index} className="flex flex-col gap-3">
                        <h5 className="font-bold uppercase">{list.name}</h5>
                        <div className="text-slate-400 capitalize text-sm flex flex-col gap-2">
                           {list.data.map((li, i) => (
                              <Link to="/" key={i}>
                                 {li}
                              </Link>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </footer>
         <div className="bg-slate-50 text-center py-3 text-slate-400 text-xs">
            <span>
               Copyright &copy; 2023 Garden Clothes. All right reserved.
            </span>
         </div>
      </>
   );
};

const footerLists = [
   {
      name: "shop",
      data: ["all collections", "winter edition", "discount"],
   },
   {
      name: "company",
      data: ["about us", "contact", "affiliates"],
   },
   {
      name: "support",
      data: ["FAQs", "cookie policy", "terms of use"],
   },
];

export default Footer;
