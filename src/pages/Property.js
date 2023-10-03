import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/Property.scss";

function Property() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id.toString() === id);

  useEffect(() => {
    const collapseBtn1 = document.querySelector(".collapseBtn1");
    const collapseContent1 = document.querySelector(".collapseContent1");
    const collapseBtn2 = document.querySelector(".collapseBtn2");
    const collapseContent2 = document.querySelector(".collapseContent2");

    if (collapseBtn1 && collapseContent1) {
      collapseBtn1.addEventListener("click", () => {
        console.log("CollapseBtn1 clicked");
        collapseContent1.classList.toggle("active");
      });
    }

    if (collapseBtn2 && collapseContent2) {
      collapseBtn2.addEventListener("click", () => {
        console.log("CollapseBtn2 clicked");
        collapseContent2.classList.toggle("active");
      });
    }
  }, []);

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
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <button className="collapseBtn1">Description</button>
      <p className="collapseContent1">{logement.description}</p>
      <button className="collapseBtn2">Equipements</button>
      <ul className="collapseContent2">
        {logement.equipments.map((equipment, id) => (
          <li key={id}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Property;
