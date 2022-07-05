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
        setTimeout(() => {
          setCards(data.data);
        }, 1500);
      });
  }, []);

  return (
    <div className="cards-container">
      {cards.length > 0 ? (
        <>
          {" "}
          {cards.map((card, i) => {
            return (
              <Card
                key={i}
                context={i}
                title={card.upper}
                content={card.middle}
                subcontent={card.bottom}
                expanded={card.expanded}
              />
            );
          })}
        </>
      ) : (
        <>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
