import React, { useEffect, useReducer, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsFillHexagonFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

import { replaceSpacingAll } from "../../utils/replaced";

// banner image header
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import Col from "../../components/template/Flex/Col";
import { BtnSearcher } from "../../components/input/SearchBar";
import {
   rewardFilters,
   rewardsDiscountVouchers,
} from "../../constants/rewards";
import BtnFilter from "../../components/atoms/BtnFilter";
import SectionCardBoxSlider from "../../components/template/Slider/SectionCardBoxSlider";

const initialState = {
   content: "tukar-poin",
};

const changeContentsFn = (state, action) => {
   if (action.type == "change_content") {
      return (state = { ...state, content: action.payload });
   }
};

const Home = () => {
   const [state, dispatch] = useReducer(changeContentsFn, initialState);
   const [active, setActive] = useState("tukar-poin");
   const [staticHeader, setStaticHeader] = useState(false);

   const changeWitdh = () => {
      if (window.scrollY >= 339) {
         setStaticHeader(true);
      } else {
         setStaticHeader(false);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", changeWitdh);
   });
   return (
      <section className="bg-gray-50 pb-20">
         <BannerReward />
         <div className="sticky bg-white/70 backdrop-blur-sm top-0 z-50 h-[150px] shadow-lg flex justify-center items-center pb-3">
            <div
               className={`absolute md:w-8/12 ${
                  staticHeader
                     ? "-translate-y-5 bg-transparent w-full"
                     : "-translate-y-[35%] bg-white w-10/12"
               } left-[50%] -translate-x-[50%] z-10 rounded-xl p-3 transition-all ease-in-out duration-300`}>
               <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <Col size={"sm"}>
                     <span className="flex gap-2 items-center">
                        0 Poin <AiOutlineExclamationCircle />
                     </span>
                     <span className="text-xs">Kadaluwarsa 30 Des 2024</span>
                  </Col>
                  <span className="flex gap-2 h-max items-center text-gray-600 bg-gray-200 rounded-xl px-3 py-1">
                     <BsFillHexagonFill />
                     Silver <RiArrowRightSLine />
                  </span>
               </div>
               <div
                  className={`flex text-red-700 text-xs text-center mt-3 justify-around transition-all ease duration-200 ${
                     staticHeader && "hidden"
                  }`}>
                  <span className="w-full">Tambah Poin</span>
                  <span className="w-full border-l border-slate-100">
                     Riwayat
                  </span>
               </div>
            </div>
            <div className="flex justify-around w-full whitespace-nowrap gap-7 self-end">
               {btnLinks.map((btn) => (
                  <button
                     key={btn}
                     onClick={() =>
                        dispatch({
                           type: "change_content",
                           payload: replaceSpacingAll(btn),
                        })
                     }
                     className={`${
                        state.content == replaceSpacingAll(btn)
                           ? "scale-105 text-black"
                           : "text-slate-400 scale-90"
                     } trasnsition-all capitalize ease-in-out duration-400`}>
                     <h4>{btn}</h4>
                  </button>
               ))}
            </div>
         </div>
         <div className="min-h-screen">
            {state.content == "tukar-poin" ? (
               <ChangePoint filter={active} />
            ) : (
               <MeReward />
            )}
         </div>
      </section>
   );
};

const btnLinks = ["tukar poin", "reward saya"];

const BannerReward = React.memo(() => {
   const images = [banner1, banner2];
   //Owl Carousel Settings
   const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 3,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5500,
      smartSpeed: 450,
      nav: false,
      responsive: {
         0: {
            items: 1,
         },
      },
   };
   return (
      <ReactOwlCarousel
         id="customer-testimonoals"
         className="owl-carousel owl-theme gap-x-5 relative"
         {...options}>
         {images.map((image, idx) => (
            <img
               src={image}
               alt="banner reward"
               key={idx}
               className="md:h-[300px] h-[210px] w-full object-cover"
            />
         ))}
      </ReactOwlCarousel>
   );
});

const ChangePoint = React.memo(() => {
   const [state, dispatch] = useReducer(changeContentsFn, initialState);

   const dataFilters = getFilterButtons(state.content);
   const [_filtered, _setFiltered] = useState(
      replaceSpacingAll(dataFilters[0][0])
   );

   //Owl Carousel Settings
   const options = {
      center: false,
      margin: 10,
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

   return (
      <div className="relative flex flex-col gap-6 my-6 py-4 bg-gray-50">
         <BtnSearcher placeholder={"Mau cari reward apa?"} />
         <ReactOwlCarousel {...options} className="owl-carousel owl-theme py-3">
            {dataFilters[0].map((data, idx) => {
               const d = replaceSpacingAll(data);
               return (
                  <BtnFilter
                     title={data}
                     key={idx}
                     active={_filtered == d}
                     onClick={() => _setFiltered(d)}
                  />
               );
            })}
         </ReactOwlCarousel>
         <SectionCardBoxSlider
            titleSection={"berbagai pilihan"}
            linkSection={"/"}
            contents={rewardsDiscountVouchers}
         />
         <SectionCardBoxSlider
            titleSection={"berbagai pilihan"}
            linkSection={"/"}
            contents={rewardsDiscountVouchers}
         />
         <SectionCardBoxSlider
            titleSection={"berbagai pilihan"}
            linkSection={"/"}
            contents={rewardsDiscountVouchers}
         />
         <SectionCardBoxSlider
            titleSection={"berbagai pilihan"}
            linkSection={"/"}
            contents={rewardsDiscountVouchers}
         />
      </div>
   );
});

const getFilterButtons = (filter) => {
   return rewardFilters
      .filter((lk) => replaceSpacingAll(lk.title) == filter)
      .map((ftr) => {
         return ftr.data;
      });
};

const MeReward = React.memo(() => {
   const [state, dispatch] = useReducer(changeContentsFn, initialState);
   const filtered = getFilterButtons(state.content);
   const [_filtered, _setFiltered] = useState(
      replaceSpacingAll(filtered[0][0])
   );

   //Owl Carousel Settings
   const options = {
      center: false,
      margin: 10,
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
   return (
      <div className="relative">
         <ReactOwlCarousel {...options} className="owl-carousel owl-theme py-3">
            {filtered[0].map((data, idx) => {
               const d = replaceSpacingAll(data);
               return (
                  <BtnFilter
                     title={data}
                     key={idx}
                     active={_filtered == d}
                     onClick={() => _setFiltered(d)}
                  />
               );
            })}
         </ReactOwlCarousel>
      </div>
   );
});

export default Home;

// 085780094808 terminal bangunan
