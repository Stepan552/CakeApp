import React, { useContext } from "react";
import { SwicthModeContext } from "../../App";
import styles from "./switchMode.module.css";

const SwicthMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(SwicthModeContext);
  return (
    <div className={styles.switch} onClick={() => setIsDarkMode(!isDarkMode)}>
      <div
        className={`${styles.switch_circle} ${
          isDarkMode ? styles.right : styles.left
        }`}
      ></div>
    </div>
  );
};

export default SwicthMode;
