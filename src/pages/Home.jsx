import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import DessertCard from "../components/DessertCard";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [dessertCards, setDessertCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://635144badfe45bbd55bb6c8e.mockapi.io/cakes?title=${searchValue}`
      )
      .then((res) => setDessertCards(res.data))
      .catch((error) => console.error(error));
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
