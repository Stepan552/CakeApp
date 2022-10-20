import React, { useContext } from "react";
import styles from "./header.module.css";
import "../../styles/navigation.css";
import SwicthMode from "../SwicthMode";
import { SwicthModeContext } from "../../App";
import Logo from "../Logo";
import Search from "../Search";

const Header = () => {
  const { isDarkMode } = useContext(SwicthModeContext);
  const Links = [
    { title: "На початок", route: "#" },
    { title: "Про нас", route: "#" },
    { title: "Начинки", route: "#" },
    { title: "Меню", route: "#" },
    { title: "Замовити", route: "#" },
    { title: "Питання", route: "#" },
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
              <a className="nav_link" href={elem.route} key={index}>
                {elem.title}
              </a>
            ))}
          </nav>
          <SwicthMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
