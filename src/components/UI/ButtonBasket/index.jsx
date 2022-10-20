import React from "react";
import styles from "./buttonBasket.module.css";
import basketIcon from "../../../images/buttonBasket/basket.png";
const BtnBasket = (props) => {
  return (
    <button
      className={`goods_card__button ${styles.btn} ${props.mode}`}
      {...props}
    >
      <div className={styles.btn_title}>{props.children}</div>
      <div className={styles.btn_icon_block}>
        <img src={basketIcon} alt="basket icon" className={styles.btn_icon} />
      </div>
    </button>
  );
};

export default BtnBasket;
