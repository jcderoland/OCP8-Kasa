import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";

function Property() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id.toString() === id);

  if (!logement) return <div>Logement non trouvé</div>;

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      {/* Ajoutez ici d'autres détails comme la description, les équipements, etc., selon vos besoins. */}
    </div>
  );
}

export default Property;
