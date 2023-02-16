import React from "react";
import { TitleWrapper, LinkTitle } from "./titleStyled";
import { Link } from "react-router-dom";

const Title = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export const TitleLink = ({ children, to, green }) => {
  if (green) {
    return (
      <Link to={to}>
        <LinkTitle green>{children}</LinkTitle>
      </Link>
    );
  }
  return (
    <Link to={to}>
      <LinkTitle>{children}</LinkTitle>
    </Link>
  );
};

export default Title;
