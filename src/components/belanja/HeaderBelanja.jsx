import { Link } from "react-router-dom";
import Col from "../template/Flex/Col";
import { RiArrowRightSLine } from "react-icons/ri";
import React from "react";

const HeaderBelanja = () => {
   return (
      <header className="w-full bg-white flex justify-around gap-x-4 py-5">
         <HeaderWrapper
            title={"Pulsa"}
            link={"/"}
            subtitle={"Rp.0"}
            linkTitle={"Isi Pulsa"}
         />
         <HeaderWrapper
            title={"Kirim Hadiah"}
            link={"/"}
            subtitle={"Pulsa dan Paket"}
            linkTitle={"kirim"}
         />
      </header>
   );
};

const HeaderWrapper = ({ title, subtitle, link, linkTitle }) => {
   return (
      <Col center items={"center"}>
         <span className="text-slate-500 text-sm">{title}</span>
         <span className="font-semibold">{subtitle}</span>
         <Link
            to={link}
            className="text-red-700 flex gap-2 items-center text-sm">
            {linkTitle}
            <RiArrowRightSLine />
         </Link>
      </Col>
   );
};

export default React.memo(HeaderBelanja);
