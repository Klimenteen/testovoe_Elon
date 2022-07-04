import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardsStyle.scss";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data.data);
      });
  }, []);

  return (
    <>
      {cards.length > 0 ? (
        <div className="cards-container">
          {" "}
          {cards.map((card, i) => {
            return <Card 
            key={i}
            />;
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cards;
