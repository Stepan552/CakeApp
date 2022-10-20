import React, { useState } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/main.css";
import "./styles/nullStyles.css";

export const SwicthModeContext = React.createContext();
export const SearchContext = React.createContext();
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <SwicthModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <div className="wrapper">
          <Header />
          <Home />
          {/* <NotFound /> */}
          <Footer />
        </div>
      </SwicthModeContext.Provider>
    </SearchContext.Provider>
  );
};

export default App;
