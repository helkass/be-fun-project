import React, { useEffect, useState } from "react";
import {
   Link,
   useLocation,
   useNavigate,
   useSearchParams,
} from "react-router-dom";
import FooterBelanja from "./FooterBelanja";
import ReactOwlCarousel from "react-owl-carousel";
import { vouchers } from "../../constants/vouchers";
import { replaceSpacingAll } from "../../utils/replaced";
import BtnFilter from "../atoms/BtnFilter";

function getFilter(path) {
   return vouchers.findIndex((link) => replaceSpacingAll(link.title) == path);
}

const PilihPaket = ({ children }) => {
   const [staticHeader, setStaticHeader] = useState(false);
   const { pathname } = useLocation();
   const indexOfPathname = getFilter(pathname.split("/")[2]);
   const navigate = useNavigate();
   const [paramsQuery, setParamsQuery] = useSearchParams();

   const defaultFilter = vouchers[indexOfPathname].vouchers[0].title;

   const [filtered, setFiltered] = useState(replaceSpacingAll(defaultFilter));

   //Owl Carousel Settings
   const options = {
      center: false,
      items: 4,
      margin: 5,
      dots: false,
      nav: false,
      responsive: {
         0: {
            items: 3,
         },
         600: {
            items: 4,
         },
      },
   };

   const handleActiveButtonFilter = (param) => {
      const r = replaceSpacingAll(param);
      setParamsQuery({
         filter: r,
      });
      setFiltered(r);
   };

   const changeColor = () => {
      if (window.scrollY >= 329) {
         setStaticHeader(true);
      } else {
         setStaticHeader(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", changeColor);
      setFiltered(paramsQuery.get("filter"));

      if (pathname.split("/").length <= 2) {
         navigate("internet?filter=internet-sakti");
      }
   }, [paramsQuery, filtered]);
   return (
      <>
         <div
            className={`${
               staticHeader ? "bg-white/90" : "bg-transparent"
            }  flex-col gap-4 pt-2 sticky top-0 w-full z-10`}>
            <h5 className="font-bold px-5 text-lg">Pilih Paket Kuota</h5>

            <div className="flex px-5 justify-between gap-3 mt-6 mb-3">
               {vouchers.map((lk, idx) => (
                  <ButtonNavigate
                     key={idx}
                     active={pathname.includes(replaceSpacingAll(lk.title))}
                     {...lk}
                  />
               ))}
            </div>
            <ReactOwlCarousel
               className={`owl-carousel owl-theme transitio-all ease duration-400 py-3 ${
                  staticHeader ? "bg-gray-50" : "bg-white/50"
               }`}
               {...options}>
               {vouchers[indexOfPathname]?.sublinks &&
                  vouchers[indexOfPathname].sublinks?.map((sub, i) => (
                     <BtnFilter
                        active={filtered == replaceSpacingAll(sub)}
                        onClick={() => handleActiveButtonFilter(sub)}
                        title={sub}
                        key={i}
                     />
                  ))}
            </ReactOwlCarousel>
         </div>
         {children}
         <FooterBelanja />
      </>
   );
};

const ButtonNavigate = React.memo(({ active, Icon, title, link }) => {
   return (
      <Link to={link}>
         <div className="flex block flex-col gap-2 capitalize justify-center text-xs items-center">
            <button
               className={`${
                  active ? "bg-gray-100" : "bg-white"
               } p-3 rounded-xl text-red-600`}>
               <Icon size={30} />
            </button>
            <p
               className={
                  active ? "text-black font-semibold" : "text-slate-400"
               }>
               {title}
            </p>
         </div>
      </Link>
   );
});

export default PilihPaket;
