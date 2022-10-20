import React from "react";
import logoURL from "../../images/logo.png";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoURL} alt="app logo" />
      <div className={styles.logo_title}>Cake</div>
    </div>
  );
};

export default Logo;
