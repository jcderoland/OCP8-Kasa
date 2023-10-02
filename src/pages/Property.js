import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";

function Property() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id.toString() === id);

  if (!logement) return <div>Logement non trouvé</div>;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < logement.rating) {
      stars.push(
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ color: "#ff6060" }}
        ></i>
      );
    } else {
      stars.push(
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ color: "#e3e3e3" }}
        ></i>
      );
    }
  }

  return (
    <div>
      <img src={logement.cover} alt={logement.title} />
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <div>{stars}</div>
      <p>Description</p>
      <p>{logement.description}</p>
      <p>Equipements</p>
      <ul>
        {logement.equipments.map((equipment, id) => (
          <li key={id}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Property;
