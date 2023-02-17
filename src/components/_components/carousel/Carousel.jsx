import React from "react";
import { CarouselWrapper, ImageCarousel } from "./carouselStyled";
import {
  ArrowButtonBack,
  ArrowButtonForward,
} from "../../atoms/arrowButton/ArrowButton";
import CategoriesComponent from "../../templates/categoriesSlider/CategoriesSlider";
import { getWindowDimensions } from "../../../functions/getWindowDimensions";

const Carousel = () => {
  const [carouselImages, setCarouselImages] = React.useState(0);
  const [showArrows, setShowArrows] = React.useState(false);

  const { width } = getWindowDimensions();

  const handleBack = () => {
    if (carouselImages < 0) {
      setCarouselImages(2);
    } else {
      setCarouselImages(carouselImages - 1);
    }
  };

  const handleForward = () => {
    if (carouselImages > 1) {
      setCarouselImages(0);
    } else {
      setCarouselImages(carouselImages + 1);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (carouselImages > 1) {
        setCarouselImages(0);
      } else {
        setCarouselImages(carouselImages + 1);
      }
    }, 3000);
  }, [carouselImages, width]);

  return (
    <CarouselWrapper>
      {width < 600 && <CategoriesComponent data={catItems} />}
      <ArrowButtonBack eventMouse={!showArrows} onClick={() => handleBack} />
      <ImageCarousel
        onMouseOver={() => setShowArrows(true)}
        onMouseOut={() => setShowArrows(false)}
        src={urlImage[carouselImages].url}
        alt="carousel-image"
      />
      <ArrowButtonForward
        eventMouse={!showArrows}
        onClick={() => handleForward}
      />
      <CategoriesComponent data={botItems} />
    </CarouselWrapper>
  );
};

const urlImage = [
  {
    url: "https://images.tokopedia.net/img/home/defaultbanner/59e9ecd0-b91b-40d4-aef8-b1057be0_auto_x2.jpg?ect=4g",
    link: "/",
  },
  {
    url: "https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g",
    link: "/",
  },
  {
    url: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/2/10/fe330d43-6a77-461e-8dd6-9f68335d235e.jpg.webp?ect=4g",
    link: "/",
  },
];

// top content
const catItems = [
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2023/2/2/b55cf9e4-69f9-4de8-8973-a7d6e8865de6.png.webp",
    label: "promo hari ini",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/25916fd0-94f8-467a-a0e4-be6049ba820d.png.webp",
    label: "lihat semua",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2022/11/8/90ff9a30-6d48-49ad-aa60-2a7c59a28765.png.webp",
    label: "belanja 2 jam tiba",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/6/30/aed48db8-0483-4b3e-bfbf-2d49c4f3b22c.png.webp",
    label: "kesehatan",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/ec5c92cb-6b3d-4643-b273-dcc431b388fc.png.webp",
    label: "top-up & tagihan",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/5d3183b0-ca7e-4004-be96-51d78c9b8d75.png.webp",
    label: "travel & entertaiment",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/40a65733-60b7-46f4-af28-1253e96803a3.png.webp",
    label: "keuangan",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/00e53743-61ac-4e80-a713-a853947ccbf5.png.webp",
    label: "office & nstationery",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2022/2/7/14ae35b2-3e1a-4cce-96ce-2f35d8a623ea.png.webp",
    label: "makanan & minuman",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/28/36005976-0689-4467-a0c4-451c2d5f7fd5.png.webp",
    label: "gaming",
  },
];

// bot content
const botItems = [
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/6/2/66151281-c524-41c2-9a84-643071d00e97.png.webp",
    label: "official store",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2022/8/8/ef55450a-0003-4d4e-b621-5cb0b650a772.png.webp",
    label: "live shopping",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2022/6/6/6078a763-4b0f-4bed-b9cd-d3a282cc7699.png.webp",
    label: "tokopedia seru",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/4/19/86e060e5-b9d9-4878-86df-20fba2db1542.png.webp",
    label: "bayar di tempat",
  },
  {
    urlImage:
      "https://images.tokopedia.net/img/cache/64-square/iEWsxH/2021/7/27/90224ebb-fd33-4bb9-be8c-8be9d8c10ba6.png.webp",
    label: "bangga lokal",
  },
];

export default Carousel;
