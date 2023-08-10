import Text from "../atoms/typography/Text";
import Col from "../template/Flex/Col";
import SectionTitle from "../template/SectionTitle";
import { IoPhonePortraitOutline } from "react-icons/io5";

import banner from "../../assets/banner.jpeg";
import CardProduct from "../card/CardProduct";

const FooterBelanja = () => {
   return (
      <div>
         <div className="py-5 px-5 mb-20 sticky top-0">
            <SectionTitle
               title={"Pembelian Terdahulu"}
               subtitle={"Beli kembali paket anda sebelumnya"}
               link={"/"}
            />
            <div className="bg-gray-50 rounded-xl p-4 flex my-6 items-center text-sm border-b border-slate-100 justify-between">
               <div className="flex gap-2 items-center">
                  <IoPhonePortraitOutline size={25} />
                  <Col>
                     <strong>InternetMAX Lite 4GB</strong>
                     <Text size={"sm"}>24 juni 2023</Text>
                  </Col>
               </div>
               <button className="bg-red-600 h-max text-white px-3 text-sm py-1 rounded-full">
                  Beli
               </button>
            </div>

            <SectionTitle
               title={"Device Bundling"}
               subtitle={"Beli gadget baru bundling SIM Card"}
               link={"/"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 grid-row-1 gap-3 mt-2">
               {cardProducts.slice(0, 2).map((prod, idx) => (
                  <CardProduct key={idx} {...prod} />
               ))}
            </div>
         </div>
      </div>
   );
};

const cardProducts = [
   {
      image: banner,
      title: "Iphone 14 pro dengan halo Iphone starter 5G Starter",
      price: "21.635.000",
      first_amount: "22.411.000",
      last_amount: "743.000",
      badgeTitle: "pascabayar",
      description: "paket halo iphone 5G Starter 12 Bulan",
   },
   {
      image: banner,
      title: "Iphone 14 pro dengan halo Iphone starter 5G Starter",
      price: "21.635.000",
      first_amount: "22.411.000",
      last_amount: "743.000",
      badgeTitle: "pascabayar",
      description: "paket halo iphone 5G Starter 12 Bulan",
   },
   {
      image: banner,
      title: "Iphone 14 pro dengan halo Iphone starter 5G Starter",
      price: "21.635.000",
      first_amount: "22.411.000",
      last_amount: "743.000",
      badgeTitle: "pascabayar",
      description: "paket halo iphone 5G Starter 12 Bulan",
   },
];

export default FooterBelanja;
