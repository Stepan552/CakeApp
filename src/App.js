import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";
import Order from "./pages/Order";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setItems, setTotalPrice } from "./redux/Slices/basketSlice";
import "./styles/main.css";
import "./styles/nullStyles.css";

const App = () => {
  const { items, totalPrice } = useSelector((state) => state.basket);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const jsonItems = JSON.stringify(items);
      localStorage.setItem("goods", jsonItems);
      localStorage.setItem("totalPrice", totalPrice);
    }
    isMounted.current = true;
  }, [items, totalPrice]);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
