import React from "react";
import "../styles/basket.css";
import EmptyBasketIcon from "../images/basket/empty-basket-icon.png";
import { useSelector, useDispatch } from "react-redux";
import DessertCardBasket from "../components/DessertCardBasket";
import { clearItems } from "../redux/Slices/basketSlice";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalPrice, items } = useSelector((state) => state.basket);
  let countItems = 0;

  if (items.length) {
    countItems = items.reduce((acc, item) => acc + item.count, 0);
  }

  const clearBasket = () => {
    dispatch(clearItems());
  };

  return (
    <div className="main-basket">
      {!countItems ? (
        <div className="empty-basket">
          <div className="empty-basket__info">
            <div className="empty-basket__title">
              <h1>Корзина пуста...</h1>
            </div>
            <div className="empty-basket__text">
              Перейдіть на головну сторінку, щоб придбати товари!
            </div>
          </div>
          <img src={EmptyBasketIcon} alt="empty basket icon" />
        </div>
      ) : (
        <div className="full-basket">
          <div className="container">
            <div className="full-basket__wrapper">
              {items.map((item) => (
                <DessertCardBasket {...item} key={item.title} />
              ))}
            </div>
            <div className="full-basket__info">
              <div className="full-basket__buttons">
                <button
                  className="full-basket__clear-btn"
                  onClick={clearBasket}
                >
                  Очистити
                </button>
                <button
                  className="full-basket__order-btn"
                  onClick={() => {
                    navigate("/order");
                  }}
                >
                  Оформити замовлення
                </button>
              </div>
              <div className="full-basket__total-price">
                <p>
                  Загальна ціна замовлення: <span>{totalPrice}</span> UAH
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Basket;
