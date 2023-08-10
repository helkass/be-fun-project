import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./BtnIcon";

const BtnLink = ({ children, link, active }) => {
   return (
      <Link to={link}>
         <Button className={"px-5 py-2"} active={active}>
            {children}
         </Button>
      </Link>
   );
};

export default BtnLink;
