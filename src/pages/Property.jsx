import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";

function Property() {
  // Extract property ID from route parameters
  const { id } = useParams();

  // Find the specific property using the ID
  const logement = logements.find((log) => log.id.toString() === id);

  // State management for visibility of description, equipment, and current image index
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [isEquipmentVisible, setEquipmentVisibility] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Display message if property is not found
  if (!logement) return <h1 className="logementNotFound">Logement non trouvé</h1>;

  // Generate star ratings based on property rating
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <i
        key={i}
        className="fa-solid fa-star"
        style={{ color: i < logement.rating ? "#ff6060" : "#e3e3e3" }}
    ></i>
));


  return (
    <div>
      {/* Image carousel */}
      <div className="imageCarrousel">
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prev) =>
                (prev - 1 + logement.pictures.length) % logement.pictures.length
            )
          }
          >
          <i class="fa-solid fa-less-than"></i>
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
          <i class="fa-solid fa-greater-than"></i>
        </button>
      </div>

      <div className="propertyTitleToHost">
        <div className="propertyTitleLocationTags">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <ul className="propertyTags">
            {logement.tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="propertyStarsHost">
          <p className="stars">{stars}</p>
          <div className="propertyHost">
            <h2 className="host">{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>
      <div className="collapse1and2">
        <div className="collapseBtn&Content">
          <div className="toggleBar2" onClick={() => setDescriptionVisibility((prev) => !prev)}>
          <button
            className="collapseBtn1"
          >
            Description
          </button>
          <p className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </p>
        </div>
          <p
            className={`collapseContent1 ${
              isDescriptionVisible ? "active" : ""
            }`}
          >
            {logement.description}
          </p>
        </div>
        <div className="collapseBtn&Content">
        <div className="toggleBar2" onClick={() => setEquipmentVisibility((prev) => !prev)}>
          <button
            className="collapseBtn2"
            
          >
            Équipements 
          </button>
          <p className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </p>
        </div>
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
