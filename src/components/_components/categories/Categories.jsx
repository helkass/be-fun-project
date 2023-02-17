import React from "react";
import Title, { TitleLink } from "../../atoms/title/Title";
import {
  CategogyWrapper,
  FlexWrapper,
  FlexContent,
  CardWrapper,
  CardItems,
  PayListWrapper,
  PayButtonWrapper,
  PayButtons,
  PayContents,
} from "./categoriesStyled";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

import money from "../../../assets/money.png";
import dog from "../../../assets/dog.png";
import plane from "../../../assets/plane.png";
import bill from "../../../assets/bill.png";
import smartphone from "../../../assets/smartphone.png";
import categories from "../../../assets/categories.png";
import computer from "../../../assets/computer.png";
import CategoriesComponent from "../../templates/categoriesSlider/CategoriesSlider";

const Categories = () => {
  const [paymentList, PaymentList] = React.useState("pulsa");
  return (
    <CategogyWrapper>
      <FlexWrapper>
        <FlexContent>
          <Title>kategori pilihan</Title>
          <CardWrapper>
            {categoryCards.map((image, i) => (
              <CardItems key={i}>
                <img src={image.urlImage} alt="image-card" />
              </CardItems>
            ))}
          </CardWrapper>
        </FlexContent>
        <FlexContent>
          <FlexWrapper>
            <Title>top up & tagihan</Title>
            <TitleLink green to="/">
              lihat semua
            </TitleLink>
          </FlexWrapper>
          <PayListWrapper>
            <PayButtonWrapper>
              {buttonPays.map((title) => (
                <PayButtons
                  key={title}
                  active={paymentList === title.toLocaleLowerCase()}
                >
                  {title}
                </PayButtons>
              ))}
              <PayButtons width="2.8rem" borderLeft>
                <HiOutlineDotsVertical size={25} />
              </PayButtons>
            </PayButtonWrapper>
            <PayContents>
              <Input
                label="nomor telepon"
                name="phone"
                id="phone"
                type="text"
                placeholder="08444756739"
              />
              <Input
                label="nominal"
                name="phone"
                id="phone"
                options
                optionsItems={options}
              />
              <Button transform="translateY(15px)" disabled>
                Beli
              </Button>
            </PayContents>
          </PayListWrapper>
        </FlexContent>
      </FlexWrapper>
      <CategoriesComponent data={categoriesSlides} />
    </CategogyWrapper>
  );
};

const options = ["Rp.10.000", "Rp.20.000", "Rp.50.000"];

const categoryCards = [
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg",
    link: "/",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg",
    link: "/",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg",
    link: "/",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg",
    link: "/",
  },
];

const buttonPays = ["Pulsa", "Paket Data", "Flight", "Listrik PLN"];

const categoriesSlides = [
  {
    urlImage: categories,
    label: "kategori",
  },
  {
    urlImage: smartphone,
    label: "Handphone & tablet",
  },
  {
    urlImage: bill,
    label: "top-up & tagihan",
  },
  {
    urlImage: plane,
    label: "travel & entertaiment",
  },
  {
    urlImage: dog,
    label: "perawatan hewan",
  },
  {
    urlImage: money,
    label: "keuangan",
  },
  {
    urlImage: computer,
    label: "komputer & laptop",
  },
];

export default Categories;
