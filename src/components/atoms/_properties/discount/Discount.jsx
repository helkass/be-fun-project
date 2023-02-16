import React from "react";
import {
  DisCountWrapper,
  DiscountPercent,
  AmountDefault,
} from "./discountStyled";

const Discount = ({ percents, amount }) => {
  return (
    <DisCountWrapper>
      <DiscountPercent>{percents}%</DiscountPercent>
      <AmountDefault>Rp.{amount}</AmountDefault>
    </DisCountWrapper>
  );
};

export default Discount;
