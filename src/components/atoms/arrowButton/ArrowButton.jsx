import React from "react";
import {
  ButtonCarousel,
  ButtonWrapperBack,
  ButtonWrapperForward,
} from "./arrowButtonStyled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ArrowButtonBack = ({ onClick, eventMouse, visible }) => {
  return (
    <ButtonWrapperBack eventMouse={eventMouse} visible={visible}>
      <ButtonCarousel onClick={onClick}>
        <IoIosArrowBack size={20} />
      </ButtonCarousel>
    </ButtonWrapperBack>
  );
};

export const ArrowButtonForward = ({ onClick, eventMouse, visible }) => {
  return (
    <ButtonWrapperForward eventMouse={eventMouse} visible={visible}>
      <ButtonCarousel onClick={onClick}>
        <IoIosArrowForward size={20} />
      </ButtonCarousel>
    </ButtonWrapperForward>
  );
};
