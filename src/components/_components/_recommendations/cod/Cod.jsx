import React from "react";
import Title from "../../../atoms/title/Title";
import { CodWrapper, ContentrSlideWrapper } from "./codStyled";
import Card from "../../../templates/card/Card";
import requestApi from "../../../../helper/requestApi/requestApi";

const Cod = () => {
  const { data, isLoading, isError } = requestApi();
  return (
    <CodWrapper>
      <Title>bayar di tempat &#60; 49rb </Title>
      <ContentrSlideWrapper>
        {data?.slice(0, 6).map((product) => (
          <Card
            key={product._id}
            urlImage={product.urlImage}
            price={product.price}
            desc={product.desc}
            disAmount={product.disAmount}
            disPercent={product.disPercent}
            placecCenter={product.store}
            sales={product.sales}
            ratingValue={product.rating}
            cashback={product.cashback}
            storeType={product.storeType}
          />
        ))}
      </ContentrSlideWrapper>
    </CodWrapper>
  );
};

export default Cod;
