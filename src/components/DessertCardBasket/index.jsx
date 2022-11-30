import React from "react";
import styles from "./dessertCardBasket.module.css";
import { useDispatch } from "react-redux";
import removingIcon from "../../images/basket/removing-icon.png";
import { increase, decrease, removeItem } from "../../redux/Slices/basketSlice";
const DessertCardBasket = ({ title, description, price, urlImage, count }) => {
  const dispatch = useDispatch();
  const handleClickAdd = () => {
    dispatch(increase(title));
  };
  const handleClickRem = () => {
    dispatch(decrease(title));
  };
  return (
    <div className={styles.basket_card}>
      <div className={styles.basket_card_image}>
        <img src={urlImage} alt="dessert" />
      </div>
      <div className={styles.basket_card_description}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.basket_card_info}>
        <div className={styles.basket_card_price}>
          Ціна: {count * price} UAH
        </div>
        <div className={styles.basket_card_count}>
          Кількість одиниць: {count}
        </div>

        <div className={styles.basket_card_buttons}>
          <button
            className={styles.basket_card_btn_add}
            onClick={handleClickAdd}
          >
            <span>+</span>
          </button>
          <button
            disabled={count === 1}
            className={styles.basket_card_btn_rem}
            onClick={handleClickRem}
          >
            <span>-</span>
          </button>
          <a
            className={styles.basket_card_btn_del}
            onClick={() => {
              dispatch(removeItem(title));
            }}
          >
            <img src={removingIcon} alt="remove button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DessertCardBasket;
