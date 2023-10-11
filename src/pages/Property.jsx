import React, { useState, useEffect } from "react";
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


    // Slideshow effect in carousel
    useEffect(() => {
      // Only set the interval if 'logement' exists
      if (logement) {
          const interval = setInterval(() => {
              // Set image opacity to 0
              const imgElement = document.querySelector('.imageCarrousel img');
              if (imgElement) imgElement.style.opacity = 0;
  
              // Change the image index after the transition duration
              setTimeout(() => {
                  setCurrentImageIndex(prev => (prev + 1) % logement.pictures.length);
  
                  // Set image opacity back to 1
                  if (imgElement) imgElement.style.opacity = 1;
              }, 1000);  
          }, 4500); 
  
          return () => clearInterval(interval);
      }
  }, [logement]);

    // Update page title
      useEffect(() => {
        if (logement) {
            document.title = "Kasa - " + logement.title;
        } else {
            document.title = "Logement non trouvé";
        }
    }, [logement]);

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
    <img src={logement.pictures[currentImageIndex]} alt={`Logement ${currentImageIndex + 1}`} />
    
    {logement.pictures.length > 1 && (
        <>
            <button
                onClick={() =>
                    setCurrentImageIndex(
                        (prev) =>
                            (prev - 1 + logement.pictures.length) % logement.pictures.length
                    )
                }
            >
                <i className="fa-solid fa-less-than"></i>
            </button>
            <button
                onClick={() =>
                    setCurrentImageIndex(
                        (prev) => (prev + 1) % logement.pictures.length
                    )
                }
            >
                <i className="fa-solid fa-greater-than"></i>
            </button>
            <p className="imageIndex">{currentImageIndex + 1}/{logement.pictures.length}</p>
        </>
    )}

    
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
    <i className={`fa-solid fa-angle-up ${isDescriptionVisible ? "rotated" : ""}`} style={{ color: "#ffffff" }}></i>
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
    <i className={`fa-solid fa-angle-up ${isEquipmentVisible ? "rotated" : ""}`} style={{ color: "#ffffff" }}></i>
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
