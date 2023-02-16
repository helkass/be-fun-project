import React from "react";
import { TitleCardWrapper } from "./titleCardStyled";

export const TitleCard = ({ children }) => {
  return <TitleCardWrapper>{children}</TitleCardWrapper>;
};

export const DescCard = ({ children }) => {
  return <DescCard>{children}</DescCard>;
};
