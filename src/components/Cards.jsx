import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.scss";
import cardsData from "../data/logements.json";

function Cards() {
  const shuffledData = cardsData.sort(() => 0.5 - Math.random());
  const selectedData = shuffledData.slice(0, 6);

  return (
    <div className="cards-container">
{selectedData.map((card) => (
    <Link key={card.id} to={`/property/${card.id}`} className="card">
        <img src={card.cover} alt={card.title} />
        <h3>{card.title}</h3>
    </Link>
))}

    </div>
  );
}

export default Cards;
