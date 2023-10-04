import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";

function Property() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id.toString() === id);

  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [isEquipmentVisible, setEquipmentVisibility] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour suivre l'image actuellement affichée

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
      {/* Carrousel d'images */}
      <div className="imageCarrousel">
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prev) =>
                (prev - 1 + logement.pictures.length) % logement.pictures.length
            )
          }
        >
          Précédent
        </button>
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prev) => (prev + 1) % logement.pictures.length
            )
          }
        >
          Suivant
        </button>
      </div>

      <div className="propertyTitleToHost">
        <div className="propertyTitleLocationTags">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <ul>
            {logement.tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="propertyStarsHost">
          <p>{stars}</p>
          <div className="propertyHost">
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>
      <div className="collapse1and2">
        <div className="collapseBtn&Content">
          <button
            className="collapseBtn1"
            onClick={() => setDescriptionVisibility((prev) => !prev)}
          >
            Description
          </button>
          <p
            className={`collapseContent1 ${
              isDescriptionVisible ? "active" : ""
            }`}
          >
            {logement.description}
          </p>
        </div>
        <div className="collapseBtn&Content">
          <button
            className="collapseBtn2"
            onClick={() => setEquipmentVisibility((prev) => !prev)}
          >
            Équipements
          </button>
          <ul
            className={`collapseContent2 ${isEquipmentVisible ? "active" : ""}`}
          >
            {logement.equipments.map((equipment, id) => (
              <li key={id}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Property;
