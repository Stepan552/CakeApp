import React, { useState } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.css";
import "./styles/nullStyles.css";

export const SwicthModeContext = React.createContext();
export const SearchContext = React.createContext();
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <SwicthModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </SwicthModeContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
};

export default App;
