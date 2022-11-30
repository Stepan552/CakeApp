import React from "react";
import styles from "./switchMode.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../redux/Slices/modeSlice";

const SwicthMode = () => {
  const isDarkMode = useSelector((state) => state.mode.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className={styles.switch} onClick={() => dispatch(changeMode())}>
      <div
        className={`${styles.switch_circle} ${
          isDarkMode ? styles.right : styles.left
        }`}
      ></div>
    </div>
  );
};

export default SwicthMode;
