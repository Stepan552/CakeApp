import React, { useContext } from "react";
import styles from "./search.module.css";
import searchIcon from "../../images/search-icon.png";
import { SearchContext } from "../../App";
const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className="Search">
      <input
        type="text"
        className={styles.sr}
        placeholder="Пошук..."
        value={searchValue}
        onChange={(ev) => setSearchValue(ev.target.value)}
      />
      <img src={searchIcon} alt="search logo" className={styles.icon_sr} />
    </div>
  );
};
export default Search;
