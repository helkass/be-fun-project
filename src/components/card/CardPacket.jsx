import BtnCard from "../atoms/BtnCard";
import Text from "../atoms/typography/Text";
import Col from "../template/Flex/Col";

const CardPacket = ({
   packetTitle,
   price,
   Icon,
   btnTitle,
   listArray,
   listTitle,
   linkBtn,
   singleList,
   badge,
}) => {
   return (
      <div
         className={`flex flex-col gap-3 py-6 px-8 rounded-xl relative bg-white ${
            badge && "pt-10"
         }`}>
         {badge && (
            <span className="absolute bg-red-600 px-3 top-0 text-white text-xs rounded-b-lg py-1">
               {badge}
            </span>
         )}
         <Text active size={"sm"}>
            {packetTitle}
         </Text>
         <p className="text-lg">Rp.{price} /bulan</p>
         {listArray && (
            <Col size={"xl"}>
               {listArray.map((list, idx) => (
                  <ListWithIcon
                     Icon={list.Icon}
                     listTitle={list.listTitle}
                     key={idx}
                  />
               ))}
            </Col>
         )}
         {singleList && <ListWithIcon Icon={Icon} listTitle={listTitle} />}
         <BtnCard card link={linkBtn} className={"mt-7"}>
            {btnTitle}
         </BtnCard>
      </div>
   );
};

const ListWithIcon = ({ Icon, listTitle }) => {
   return (
      <span className="flex text-sm gap-2 items-center text-slate-400">
         <Icon color={"black"} />
         {listTitle}
      </span>
   );
};

export default CardPacket;
