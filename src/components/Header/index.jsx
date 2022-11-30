import React from "react";
import { useSelector } from "react-redux";
import SwicthMode from "../SwicthMode";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import "../../styles/navigation.css";
import Logo from "../Logo";
import Search from "../Search";
import basketIcon from "../../images/basket/basket-icon.png";

const Header = () => {
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const { items } = useSelector((state) => state.basket);
  let countItems = 0;
  if (items.length) {
    countItems = items.reduce((acc, item) => acc + item.count, 0);
  }

  const Links = [
    { title: "На початок", route: "/" },
    { title: "Про нас", route: "/about" },
    { title: "Начинки", route: "/inner" },
    { title: "Меню", route: "/menu" },
    { title: "Замовити", route: "/order/goods" },
    { title: "Питання", route: "/questions" },
  ];

  return (
    <header
      className={`${styles.header} ${isDarkMode ? "dark_mode" : "light_mode"}`}
    >
      <div className="container">
        <div className={styles.header_inner}>
          <Logo />
          <Search />
          <nav className="nav">
            {Links.map((elem, index) => (
              <Link className="nav_link" to={elem.route} key={index}>
                {elem.title}
              </Link>
            ))}
          </nav>
          <SwicthMode />
          <div className={styles.basket}>
            <Link to="/basket">
              <img src={basketIcon} alt="basket icon" />
              <div className={styles.count_goods}>{countItems}</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
