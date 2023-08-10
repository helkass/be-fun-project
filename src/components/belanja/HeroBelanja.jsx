import React from "react";
import SectionTitle from "../template/SectionTitle";
import Col from "../template/Flex/Col";
import Text from "../atoms/typography/Text";
import ReactOwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";

const cardItems = [
   {
      title: "Internet spesial",
      subtitle: "11 GB | 30 Hari",
      price: "35.000",
   },
   {
      title: "Internet spesial 0.2",
      subtitle: "202 MB | 1 Hari",
      price: "1.000",
   },
   {
      title: "Internet spesial 1.5",
      subtitle: "1.5 GB | 7 Hari",
      price: "5.000",
   },
   {
      title: "Internet spesial",
      subtitle: "11 GB | 30 Hari",
      price: "35.000",
   },
   {
      title: "Internet spesial 0.2",
      subtitle: "202 MB | 1 Hari",
      price: "1.000",
   },
   {
      title: "Internet spesial 1.5",
      subtitle: "1.5 GB | 7 Hari",
      price: "5.000",
   },
];

const HeroBelanja = () => {
   //Owl Carousel Settings
   const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 8,
      dots: true,
      nav: false,
      responsive: {
         0: {
            items: 2,
         },
         600: {
            items: 3,
         },
         1000: {
            items: 4,
         },
      },
   };
   return (
      <div className="w-full z-1 flex relative flex-col gap-3 min-h-[230px] h-full">
         <div className="cs" />
         <div className="cs2" />
         <SectionTitle normal title={"Paket Khusus Untukmu"} link={"/"} />
         <div className="my-2">
            <ReactOwlCarousel className="owl-carousel owl-theme" {...options}>
               {cardItems.map((card, idx) => (
                  <CardBelanja
                     key={idx}
                     title={card.title}
                     price={card.price}
                     subtitle={card.subtitle}
                  />
               ))}
            </ReactOwlCarousel>
         </div>
      </div>
   );
};

const CardBelanja = ({ title, subtitle, price }) => {
   return (
      <div className="card-box text-sm bg-gray-50 px-3 py-7 bg-opacity-70 border border-white">
         <Col size={"sm"}>
            <Text size={"xs"}>{title}</Text>
            <strong>{subtitle}</strong>
            <strong className="mt-1">Rp{price}</strong>
         </Col>
      </div>
   );
};

export default React.memo(HeroBelanja);
