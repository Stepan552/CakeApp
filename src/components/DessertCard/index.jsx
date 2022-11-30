import React from "react";
import BtnBasket from "../UI/ButtonBasket";
import "../../styles/goods.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/Slices/basketSlice";
const DessertCard = ({ title, description, price, urlImage }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);

  const handleClick = () => {
    const itemBasket = {
      title,
      description,
      price,
      urlImage,
    };
    dispatch(addItem(itemBasket));
  };

  return (
    <div className="goods_card">
      <div className="goods_card__image">
        <img src={urlImage} alt="dessert" />
      </div>
      <div className="goods_card__details">
        <div className="goods_card__info">
          <h3 className="goods_card__title">{title}</h3>
          <p className="goods_card__description">{description}</p>
        </div>
        <div className="goods_card__basket">
          <BtnBasket
            mode={isDarkMode ? "dark_mode" : "light_mode"}
            onClick={handleClick}
          >
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
