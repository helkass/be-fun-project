import { useLocation, useSearchParams } from "react-router-dom";
import CardVoucher from "../../components/card/CardVoucher";
import Col from "../../components/template/Flex/Col";
import { vouchers } from "../../constants/vouchers";
import BtnCard from "../../components/atoms/BtnCard";
import { replaceSpacingAll } from "../../utils/replaced.js";

function getVouchers(linkRoute, queryValue) {
   const filtered = vouchers.filter(
      (v) => replaceSpacingAll(v.title) == linkRoute
   );
   const takeVouchers = filtered[0].vouchers.filter(
      (v) => replaceSpacingAll(v.title) == queryValue
   );

   // return array
   return takeVouchers[0]?.data;
}

const Packets = () => {
   const [query] = useSearchParams();
   const location = useLocation();

   // take params belanja => internet
   const pLink = location.pathname.split("/")[2];

   // get value query
   const q = query.get("filter");

   const datas = getVouchers(pLink, q);

   return (
      <div className="bg-gray-50 px-5 py-5">
         <Col size={"xl"}>
            {datas.slice(0, 3).map((voucher, idx) => (
               <CardVoucher key={idx} {...voucher} />
            ))}
            {datas.length > 3 && (
               <BtnCard
                  link={"/"}
                  type={"outline"}
                  className={"w-full bg-white"}>
                  Lihat Semua
               </BtnCard>
            )}
         </Col>
      </div>
   );
};

export default Packets;
