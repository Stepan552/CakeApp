import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import "../../styles/navigation.css";
import SwicthMode from "../SwicthMode";
import { SwicthModeContext } from "../../App";
import Logo from "../Logo";
import Search from "../Search";

const Header = () => {
  const { isDarkMode } = useContext(SwicthModeContext);
  const Links = [
    { title: "На початок", route: "/" },
    { title: "Про нас", route: "/about" },
    { title: "Начинки", route: "/inner" },
    { title: "Меню", route: "/menu" },
    { title: "Замовити", route: "/order" },
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
        </div>
      </div>
    </header>
  );
};

export default Header;
