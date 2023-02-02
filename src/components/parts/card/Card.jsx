import React from "react";
import ButtonIcon from "../button/ButtonIcon";
import "./card.css";
import { BsFillPlusCircleFill, BsHeartFill } from "react-icons/bs";

const Card = ({ image, title, description, onAddCart, onFavorit }) => {
   return (
      <div id="card" className="shadow">
         <div className="card--image">
            <img src={image} alt={title} />
         </div>
         <div className="card--content">
            <p className="card--title">{title}</p>
            <p className="card--desc">{description}</p>
         </div>
         <div className="button-icon-content card--content">
            <ButtonIcon icon={BsHeartFill} onClick={onFavorit} />
            <ButtonIcon icon={BsFillPlusCircleFill} onClick={onAddCart} />
         </div>
      </div>
   );
};

export default Card;
