import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./search.module.css";
import searchIcon from "../../images/search-icon.png";
import { setSearchValue } from "../../redux/Slices/filterSlice";

const Search = () => {
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.sr}
        placeholder="Пошук..."
        value={searchValue}
        onChange={(ev) => dispatch(setSearchValue(ev.target.value))}
      />
      <img src={searchIcon} alt="search logo" className={styles.icon_sr} />
    </div>
  );
};
export default Search;
