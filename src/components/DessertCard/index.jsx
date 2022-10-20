import React, { useContext } from "react";
import BtnBasket from "../UI/ButtonBasket";
import "../../styles/goods.css";
import { SwicthModeContext } from "../../App";
const DessertCard = ({ title, description, price, urlImage }) => {
  const { isDarkMode } = useContext(SwicthModeContext);
  return (
    <div className="goods_card">
      <div className="goods_card__image">
        <img src={urlImage} alt="dessert photo" />
      </div>
      <div className="goods_card__details">
        <div className="goods_card__info">
          <h3 className="goods_card__title">{title}</h3>
          <p className="goods_card__description">{description}</p>
        </div>
        <div className="goods_card__basket">
          <BtnBasket mode={isDarkMode ? "dark_mode" : "light_mode"}>
            В корзину
          </BtnBasket>{" "}
          {/* button is taken prop mode (name of mode class) */}
          <div className="goods_card__price">{price} UAH</div>
        </div>
      </div>
    </div>
  );
};

export default DessertCard;
