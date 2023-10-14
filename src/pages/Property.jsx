import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";
import { Collapse } from "../components/Collapse";
import Carousel from '../components/Carousel';


function Property() {

    // Extract property ID from route parameters
    const { id } = useParams();

    // Find the specific property using the ID
    const logement = logements.find((log) => log.id.toString() === id);


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
      <Carousel pictures={logement.pictures} />

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

  <Collapse 
    title="Description" 
    content={logement.description} 
/>
<Collapse 
    title="Équipements" 
    content= {logement.equipments.map((equipment, id) => (
      <li key={id}>{equipment}</li>
    ))} 
/>

      </div>
    </div>
  );
}

export default Property;
