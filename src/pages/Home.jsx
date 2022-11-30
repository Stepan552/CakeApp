import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DessertCard from "../components/DessertCard";
import { getCakesAndSave } from "../redux/Slices/cakeSlice.js";

const Home = () => {
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dessertCards = useSelector((state) => state.cake.cakes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCakesAndSave({ searchValue }));
  }, [searchValue]);
  return (
    <main className="content">
      <div className="container">
        <div className="wrapper_goods">
          {dessertCards.map((dessert) => (
            <DessertCard {...dessert} key={dessert.title} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
