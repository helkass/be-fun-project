import BtnCard from "../../components/atoms/BtnCard";
import Text from "../../components/atoms/typography/Text";
import CardPacket from "../../components/card/CardPacket";
import BlurWrapper from "../../components/globalsWrapper/BlurWrapper";
import Col from "../../components/template/Flex/Col";

import { RiHome3Fill } from "react-icons/ri";

const packets = [
   {
      packetTitle: "Paket JITU 1 100mbps",
      price: 375.0,
      listArray: [
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
      ],
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
   },
   {
      packetTitle: "Paket JITU 1 50mbps",
      price: 375.0,
      listArray: [
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
      ],
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
   },
   {
      packetTitle: "Paket JITU 1 30mbps",
      price: 375.0,
      listArray: [
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
         {
            Icon: RiHome3Fill,
            listTitle: "Kuota Internet Unlimited",
         },
      ],
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
   },
];

export default function OnePacket() {
   return (
      <section className="mt-24">
         <BlurWrapper className={"px-6 mb-32"}>
            <Col size={"xl"}>
               <Text active size={"md"}>
                  Mulai berlangganan Paket One
               </Text>
               <p className="md:text-2xl text-xl">
                  Nikmati jaringan Telkomsel kapan pun dimana pun!
               </p>
               <Col size={"xl"}>
                  {packets.map((packet, idx) => (
                     <CardPacket badge={"Paket FMC"} key={idx} {...packet} />
                  ))}
               </Col>
               <BtnCard type={"outline"} card link={"/"}>
                  Lihat semua
               </BtnCard>
            </Col>
         </BlurWrapper>
      </section>
   );
}
