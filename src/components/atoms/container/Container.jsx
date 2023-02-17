import React from "react";
import { ContainerWrapper } from "./containerStyled";

const Container = ({ children, pt }) => {
  return <ContainerWrapper pt={pt}>{children}</ContainerWrapper>;
};

export default Container;
