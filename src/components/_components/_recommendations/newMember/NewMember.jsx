import React, { useState } from "react";
import { getWindowDimensions } from "../../../../functions/getWindowDimensions";
import {
  ArrowButtonBack,
  ArrowButtonForward,
} from "../../../atoms/arrowButton/ArrowButton";
import ImageCard from "../../../atoms/image/Image";
import Title, { TitleLink } from "../../../atoms/title/Title";
import Discount from "../../../atoms/_properties/discount/Discount";
import {
  NewMemberWrapper,
  HeaderWrapper,
  ClockWrapper,
  Clock,
  MainContent,
  BannerWrapper,
  BannerImage,
  SlidesWrapper,
  CardWrapper,
  CardContent,
  BarProcentance,
  StatusProduct,
  FlexWrapper,
} from "./newMemberStyled";

const NewMember = () => {
  const [showArrows, setShowArrows] = React.useState(true);
  const [slideMove, setSlideMove] = React.useState(true);
  const { width } = getWindowDimensions();

  return (
    <NewMemberWrapper>
      <HeaderWrapper>
        <FlexWrapper>
          <Title>traktiran pengguna baru</Title>
          <HeaderWrapper>
            <span>berakhr dalam</span>
            <ClockTimer select={width} />
          </HeaderWrapper>
        </FlexWrapper>
        <TitleLink green to="/">
          lihat semua
        </TitleLink>
      </HeaderWrapper>
      <MainContent>
        <ArrowButtonBack
          eventMouse={showArrows || slideMove}
          onClick={() => setSlideMove(true)}
        />
        <BannerWrapper slideMove={slideMove}>
          <BannerImage
            src="https://images.tokopedia.net/img/cache/240/PYbRbC/2023/2/1/443042e0-3c54-4205-83be-b7d381c6b39e.png.webp?ect=4g"
            alt="banner-image"
          />
        </BannerWrapper>
        <SlidesWrapper
          onMouseOver={() => setShowArrows(false)}
          onMouseOut={() => setShowArrows(true)}
          slideMove={slideMove}
        >
          {slideItems.map((item, idx) => (
            <CardComponent
              key={idx}
              urlImage={item.urlImage}
              total={item.total}
              discount={item.discount}
              amount={item.amount}
              stockPercent={item.stockPercent}
            />
          ))}
        </SlidesWrapper>
        <ArrowButtonForward
          eventMouse={showArrows || !slideMove}
          onClick={() => setSlideMove(false)}
        />
      </MainContent>
    </NewMemberWrapper>
  );
};

// clock penawaran
const ClockTimer = ({ select }) => {
  if (select > 600) {
    return (
      <ClockWrapper>
        <Clock>12</Clock>:<Clock>00</Clock>:<Clock>00</Clock>
      </ClockWrapper>
    );
  }

  return (
    <ClockWrapper>
      <Clock>12</Clock>
      <Clock>00</Clock>
      <Clock>00</Clock>
    </ClockWrapper>
  );
};

const CardComponent = React.memo(function CardComponents(props) {
  return (
    <CardWrapper>
      <ImageCard src={props.urlImage} />
      <CardContent>
        <p>{props.total}</p>
        <Discount percents={props.discount} amount={props.amount} />
        <BarProcentance stockPercent={props.stockPercent} />
        <StatusProduct>Tersedia</StatusProduct>
      </CardContent>
    </CardWrapper>
  );
});

const slideItems = [
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/2/2/03bfc2ae-57a6-40da-b773-fa6f3ce4d460.jpg",
    total: "10.000",
    discount: "56%",
    amount: "68.000",
    stockPercent: "20%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/3/11/04145037-278e-4640-b934-7d631f3caeae.jpg",
    total: "10.000",
    discount: "67%",
    amount: "37%",
    stockPercent: "20%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/2/1/f123460a-75b7-4164-8b84-7f2b82727a67.jpg",
    total: "10.000",
    discount: "70%",
    amount: "45.799",
    stockPercent: "5%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/2/13/03c2ff18-fd58-44a9-afa9-7ca9e42dcb1d.jpg",
    total: "10.000",
    discount: "94%",
    amount: "29.000",
    stockPercent: "3%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/5/10/dc75f28b-79d3-4295-9a3d-b9ede8bb6fc2.jpg",
    total: "10.000",
    discount: "92%",
    amount: "130.000",
    stockPercent: "2%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/7/12/12b79421-b742-4bb5-9b07-6bc94f02bdd9.jpg",
    total: "10.000",
    discount: "83%",
    amount: "59.750",
    stockPercent: "2%",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/4/13/05185439-48e4-4545-9047-4ea298ea8303.png",
    total: "10.000",
    discount: "58%",
    amount: "24.000",
    stockPercent: "2%",
  },
];

export default NewMember;
