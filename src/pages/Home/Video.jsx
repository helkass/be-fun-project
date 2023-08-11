import Text from "../../components/atoms/typography/Text";
import CardBox from "../../components/card/CardBox";
import CardVoucher from "../../components/card/CardVoucher";
import Col from "../../components/template/Flex/Col";
import SectionTitle from "../../components/template/SectionTitle";
import { memo } from "react";
import OwlCarousel from "react-owl-carousel";

import banner from "../../assets/banner.jpeg";

export default function Video() {
   return (
      <section className="!mt-24">
         <div className="px-5 pt-5">
            <CarouselContent />
         </div>
         <div className="blur-wrap px-5 pb-32 pt-7">
            <Col size={"xl"}>
               <Text active size={"sm"}>
                  Special for You
               </Text>
               <div className="overflow-x-auto">
                  <div className="flex gap-x-3 pb-2">
                     <CardBox />
                     <CardBox />
                     <CardBox />
                     <CardBox />
                     <CardBox />
                     <CardBox />
                     <CardBox />
                  </div>
               </div>
               <SectionTitle title={"biar nonton makin lancar ~"} link={"/"} />
               <Col size={"md"}>
                  {vouchers.map((voucher, idx) => (
                     <CardVoucher key={idx} {...voucher} />
                  ))}
               </Col>
            </Col>
         </div>
      </section>
   );
}

const CarouselContent = memo(() => {
   const movies = [
      {
         title: "Sajadah Panjang",
         subtitle: "Disponsori oleh Maxtream",
         image: banner,
      },
      {
         title: "Sajadah Panjang",
         subtitle: "Disponsori oleh Maxtream",
         image: banner,
      },
      {
         title: "Sajadah Panjang",
         subtitle: "Disponsori oleh Maxtream",
         image: banner,
      },
      {
         title: "Sajadah Panjang",
         subtitle: "Disponsori oleh Maxtream",
         image: banner,
      },
      {
         title: "Sajadah Panjang",
         subtitle: "Disponsori oleh Maxtream",
         image: banner,
      },
   ];
   //Owl Carousel Settings
   const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 3,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      nav: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 1,
         },
         1000: {
            items: 2,
         },
      },
   };
   return (
      <OwlCarousel
         id="customer-testimonoals"
         className="owl-carousel owl-theme gap-x-5"
         {...options}>
         {movies.map((movie, idx) => (
            <PotraitMovie {...movie} key={idx} />
         ))}
      </OwlCarousel>
   );
});

const PotraitMovie = ({ subtitle, image, title }) => {
   return (
      <div className="text-white min-w-[230px] relative min-h-[320px] rounded-lg card-box">
         <img src={image} alt={title} className="w-full h-full object-cover" />
         <div className="absolute z-10 bottom-2 left-2">
            <h4 className="font-bold text-lg">{title}</h4>
            <p>{subtitle}</p>
         </div>
      </div>
   );
};

const vouchers = [
   {
      title: "GALA & Prime Video Mobile",
      price: "71.000",
      description: "9 GB | 30 Hari",
   },
   {
      title: "GALA",
      price: "155.000",
      description: "40 GB | 30 Hari",
   },
   {
      title: "GALA",
      price: "101.000",
      description: "24 GB | 30 Hari",
   },
];
