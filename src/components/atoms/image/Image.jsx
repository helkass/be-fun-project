import React from "react";
import { CardImage, ImageWrapper } from "./imageStyled";

const ImageCard = ({ src }) => {
  return (
    <ImageWrapper>
      <CardImage src={src} alt="image" loading="lazy" />
    </ImageWrapper>
  );
};

export default ImageCard;
