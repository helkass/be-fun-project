import React from "react";
import ImageCard from "../../atoms/image/Image";
import Cashback from "../../atoms/_properties/cashback/Cashback";
import Discount from "../../atoms/_properties/discount/Discount";
import OfficialStore from "../../atoms/_properties/officialStore/OfficialStore";
import RatingAndSales from "../../atoms/_properties/rating&sales/Rating&Sales";
import { TitleCard } from "../../atoms/_properties/titleCard/TitleCard";
import { DescCard } from "../../atoms/_properties/titleCard/titleCardStyled";
import { CardWrapper, CardContent } from "./cardStyled";

const Card = ({
  urlImage,
  price,
  desc,
  disAmount,
  disPercent,
  placecCenter,
  sales,
  ratingValue,
  cashback,
  storeType,
}) => {
  return (
    <CardWrapper>
      <ImageCard src={urlImage} alt="images" />
      <CardContent>
        <DescCard>{desc}</DescCard>
        <TitleCard>Rp.{price}</TitleCard>
        {cashback ? <Cashback>Cashback</Cashback> : ""}
        <Discount percents={disPercent} amount={disAmount} />
        {/* condition store logo */}
        <OfficialStore storeType={storeType} placecCenter={placecCenter} />
        <RatingAndSales ratingValue={ratingValue} sales={sales} />
      </CardContent>
    </CardWrapper>
  );
};

export default React.memo(Card);
