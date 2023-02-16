import React from "react";
import { CashbackWrapper } from "./cashbackStyled";

/*
    properties : 
        Grosir,
        cashback
*/
const Cashback = ({ children }) => {
  return <CashbackWrapper>{children}</CashbackWrapper>;
};

export default Cashback;
