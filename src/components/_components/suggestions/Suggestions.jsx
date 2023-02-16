import React, { useEffect } from "react";
import Card from "../../templates/card/Card";
import {
  CardCategory,
  NavigationsCategories,
  SuggestionsWrapper,
  GridWrapper,
  ButtonWrapper,
  ButtonNavigate,
} from "./suggestionsStyled";
import requestApi from "../../../helper/requestApi/requestApi";

const Suggestions = () => {
  const { data, isLoading, isError } = requestApi();
  return (
    <SuggestionsWrapper>
      <NavigationsCategories>
        {CatItems.map((cat, idx) => (
          <CardCategory key={idx} urlImage={cat.urlImage}>
            <span>{cat.label}</span>
          </CardCategory>
        ))}
      </NavigationsCategories>
      <GridWrapper>
        {data?.map((product) => (
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
      </GridWrapper>
      <ButtonWrapper>
        <ButtonNavigate>muat lebih banyak</ButtonNavigate>
      </ButtonWrapper>
    </SuggestionsWrapper>
  );
};

// cat links or filter by category list
const CatItems = [
  {
    label: "for you",
    urlImage:
      "https://images.tokopedia.net/img/cache/100/ndZFpx/2022/12/21/a14d9d4e-8b3d-4345-9a15-3c66a921b2f2.jpg",
  },
  {
    label: "special discount",
    urlImage:
      "https://images.tokopedia.net/img/cache/100/attachment/2019/10/8/40768394/40768394_1629133d-4c08-467c-aed0-bd8e82c7ea40.jpg",
  },
  {
    label: "kue",
    urlImage:
      "https://images.tokopedia.net/img/cache/100/attachment/2019/11/7/75545163/75545163_f6ac6050-3872-48e8-b445-02a33e346061.jpg",
  },
  {
    label: "celana panjang wanita",
    urlImage:
      "https://images.tokopedia.net/img/cache/100/attachment/2019/10/23/40768394/40768394_7c9ad641-8a48-4b63-a4cc-cae37bbcaae1.jpg",
  },
  {
    label: "atasan pria",
    urlImage:
      "https://images.tokopedia.net/img/cache/100/attachment/2019/10/23/40768394/40768394_6a24460c-fbc2-40ab-bea6-3e557474f1d7.jpg",
  },
];

export default Suggestions;
