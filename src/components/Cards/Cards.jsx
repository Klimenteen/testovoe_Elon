import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { apiUrl } from "../../config";
import "./CardsStyle.scss";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    if (!cards.length) {
      setTimeout(() => {
        fetch(apiUrl + "/testovoe_Elon/db.json", { signal: controller.signal })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setCards(data.data);
          })
          .catch((error) => {
            console.log("запрос отменен");
          });
      }, 1500);
    }
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="cards-container">
      {cards.length > 0 ? (
        <>
          {" "}
          {cards.map((card, i) => (
            <Card
              key={i}
              context={i}
              title={card.upper}
              content={card.middle}
              subcontent={card.bottom}
              expanded={card.expanded}
            />
          ))}
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
