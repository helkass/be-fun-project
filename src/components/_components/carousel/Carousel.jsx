import React from "react";
import { CarouselWrapper, ImageCarousel } from "./carouselStyled";
import {
  ArrowButtonBack,
  ArrowButtonForward,
} from "../../atoms/arrowButton/ArrowButton";

const Carousel = () => {
  const [carouselImages, setCarouselImages] = React.useState(0);
  const [showArrows, setShowArrows] = React.useState(false);

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
  }, [carouselImages]);

  return (
    <CarouselWrapper>
      <ArrowButtonBack eventMouse={!showArrows} onClick={() => handleBack} />
      <ImageCarousel
        onMouseOver={() => setShowArrows(true)}
        onMouseOut={() => setShowArrows(false)}
        src={urlImage[carouselImages].url}
        alt="carousel-image"
      />
      ;
      <ArrowButtonForward
        eventMouse={!showArrows}
        onClick={() => handleForward}
      />
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

export default Carousel;
