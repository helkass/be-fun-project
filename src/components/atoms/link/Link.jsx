import React from "react";
import { LinkStyled } from "./linkStyled";
import { Link } from "react-router-dom";

const LinkTitle = ({ to, children, color, fs, padding, bb }) => {
  return (
    <Link to={to}>
      <LinkStyled pd={padding} fs={fs} bb={bb} color={color}>
        {children}
      </LinkStyled>
    </Link>
  );
};

export default LinkTitle;
