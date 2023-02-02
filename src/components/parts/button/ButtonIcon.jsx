import React from "react";
import "./buttonStyles.css";

const ButtonIcon = ({ icon, onClick, colorIcon, sizeIcon }) => {
   const Icon = icon;
   return (
      <button onClick={onClick} className="button--icon">
         <Icon color={colorIcon || "#2d635e"} size={sizeIcon || 21} />
      </button>
   );
};

export default ButtonIcon;
