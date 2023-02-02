import React from "react";
import "./alertStyles.css";
import { BsCheck2All } from "react-icons/bs";

const ALert = ({ title, active }) => {
   return (
      <div className={`alert-content ${active && "active"}`}>
         <p>success {title}</p>
         <BsCheck2All size={20} />
      </div>
   );
};

export default ALert;
