import React from "react";
import { ContainerWrapper } from "./containerStyled";

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
