import Col from "../../components/template/Flex/Col";
import BlurWrapper from "../../components/globalsWrapper/BlurWrapper";
import Text from "../../components/atoms/typography/Text";
import BtnCard from "../../components/atoms/BtnCard";
import { RiHome3Fill } from "react-icons/ri";
import CardPacket from "../../components/card/CardPacket";

const packets = [
   {
      packetTitle: "Paket JITU 1 100mbps",
      price: 375.0,
      Icon: RiHome3Fill,
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
      listTitle: "Kuota Internet Unlimited",
   },
   {
      packetTitle: "Paket JITU 1 50mbps",
      price: 375.0,
      Icon: RiHome3Fill,
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
      listTitle: "Kuota Internet Unlimited",
   },
   {
      packetTitle: "Paket JITU 1 30mbps",
      price: 375.0,
      Icon: RiHome3Fill,
      btnTitle: "Mulai berlangganan",
      linkBtn: "/",
      listTitle: "Kuota Internet Unlimited",
   },
];

export default function Indihome() {
   return (
      <section className="mt-24 mb-32">
         <Col size={"xl"}>
            <BlurWrapper>
               <div className="flex justify-between items-center">
                  <Text>SUdah berlangganan IndiHome?</Text>
                  <BtnCard type={"outline"}>Login di sini</BtnCard>
               </div>
            </BlurWrapper>
            <BlurWrapper className={"px-6"}>
               <Col size={"xl"}>
                  <Text active>Mulai berlangganan Paket IndiHome</Text>
                  <p className="text-2xl">
                     Solusi Internet Cepat, Berkelas, dan Cerdas untuk Aktivitas
                     Tanpa Batas
                  </p>
                  {packets.map((packet, idx) => (
                     <CardPacket key={idx} singleList {...packet} />
                  ))}
                  <BtnCard type={"outline"} card link={"/"}>
                     Lihat semua
                  </BtnCard>
               </Col>
            </BlurWrapper>
         </Col>
      </section>
   );
}
