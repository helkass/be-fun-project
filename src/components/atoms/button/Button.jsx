import React from "react";
import { ButtonWrapper } from "./buttonStyled";

const Button = ({ children, disabled, transform }) => {
  return (
    <ButtonWrapper transform={transform} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
