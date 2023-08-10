import React from "react";
import BlurWrapper from "../../components/globalsWrapper/BlurWrapper";
import Text from "../../components/atoms/typography/Text";
import Col from "../../components/template/Flex/Col";
import Alert from "../../components/atoms/Alert";
import { PiGlobeSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import SectionCardSlider from "../../components/template/Slider/SectionCardSlider";

const Dashboard = () => {
   const slidesContents = [
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
      {
         title: "program baru daily check in, raih semua hadianya dan dapatkan paket palsu",
         link: "/",
      },
   ];
   return (
      <section id="dashboard" className="pt-28 z-10">
         <Col size={"xl"}>
            <BlurWrapper className={"flex justify-between"}>
               <div className="flex flex-col gap-2">
                  <div className="flex gap-x-2">
                     <Text size={"sm"}>083865563826</Text>
                     <Text size={"sm"} active>
                        prabayar
                     </Text>
                  </div>
                  <Text size={"sm"}>nomor aktif sampai 29 agust 2024</Text>
               </div>
               <div className="flex gap-x-2">
                  <div className="flex flex-col gap-2">
                     <Text size={"sm"}>0 Poin</Text>
                     <Text size={"sm"}>SILVER</Text>
                  </div>
                  <h3>H</h3>
               </div>
            </BlurWrapper>
            <BlurWrapper className={"mt-5 px-6"}>
               <Col size={"md"}>
                  <div className="flex flex-row justify-around border-b border-white pb-4 mb-3">
                     <Col items={"center"} size={"sm"}>
                        <Text size={"sm"}>Pulsa</Text>
                        <Text active size={"md"}>
                           Rp0
                        </Text>
                        <Text size={"sm"} active primary>
                           Isi pulsa
                        </Text>
                     </Col>
                     <Col size={"sm"} items={"center"}>
                        <Text size={"sm"}>My Voucher</Text>
                        <Text active size={"md"}>
                           Rp0
                        </Text>
                        <Text size={"sm"} active primary>
                           Lihat Detail
                        </Text>
                     </Col>
                  </div>
                  <div className="flex justify-evenly gap-x-3 mb-5">
                     {[0, 1, 2, 3].map((item, idx) => (
                        <Col key={idx} size={"sm"} items={"center"} center>
                           <Text size={"sm"}>Internet</Text>
                           <span className="w-[60px] h-[60px] rounded-full border bg-white border-slate-300 font-semibold text-sm flex justify-center items-center">
                              0 Gb
                           </span>
                        </Col>
                     ))}
                  </div>
                  <Alert
                     type={"error"}
                     title={"Anda tidak memiliki kuota"}
                     link={"/beli"}
                  />
                  <div className="border-t border-white flex justify-between mb-1 pt-3 text-sm xl:text-md">
                     <Link to="/" className="text-red-700">
                        Riwayat Transaksi
                     </Link>
                     <Link to="/" className="text-red-700">
                        Detail Kuota
                     </Link>
                  </div>
               </Col>
            </BlurWrapper>
            <BlurWrapper className={"overflow-auto"}>
               <div className="flex gap-14 md:gap-10 flex-nowrap">
                  {[0, 2, 3, 4, 6, 3, 1].map((item, idx) => (
                     <Col key={idx} size={"sm"} center items={"center"}>
                        <PiGlobeSimple size={40} />
                        <Text size={"sm"} active center>
                           Beli Paket
                        </Text>
                     </Col>
                  ))}
               </div>
            </BlurWrapper>
         </Col>
         <div className="bg-gray-50 w-full flex flex-col gap-5 bg-opacity-80 backdrop-blur-sm py-3 mt-5 pb-24 rounded-lg px-3">
            <Col size={"md"}>
               <SectionCardSlider
                  title={"Penawaran Pilihan"}
                  link={"/"}
                  slides={slidesContents}
               />
            </Col>
            <Col size={"md"}>
               <SectionCardSlider
                  title={"Penawaran Pilihan"}
                  link={"/"}
                  slides={slidesContents}
               />
            </Col>
         </div>
      </section>
   );
};

export default Dashboard;
