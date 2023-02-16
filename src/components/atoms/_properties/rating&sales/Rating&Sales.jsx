import React from "react";
import { RatingSalesWrapper, Rating } from "./rating&SalesStyled";
import { AiFillStar } from "react-icons/ai";
const RatingAndSales = ({ ratingValue, sales }) => {
  return (
    <RatingSalesWrapper>
      <Rating>
        <AiFillStar color="yellow" size={15} />
        {ratingValue}
      </Rating>
      <span>Terjual {sales}</span>
    </RatingSalesWrapper>
  );
};

export default RatingAndSales;
