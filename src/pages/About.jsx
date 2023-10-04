import React, { useState } from "react";
import "../styles/About.scss";
import aboutImage from "../assets/images/aboutImage1.png";

const About = () => {
  // State management for visibility of different sections
  const [isSection1Visible, setSection1Visibility] = useState(false);
  const [isSection2Visible, setSection2Visibility] = useState(false);
  const [isSection3Visible, setSection3Visibility] = useState(false);
  const [isSection4Visible, setSection4Visibility] = useState(false);

  return (
    <div className="aboutSection">
      <img src={aboutImage} alt="aboutImage" className="aboutImage" />
      <div
        className="toggleBar"
        onClick={() => setSection1Visibility((prev) => !prev)}
      >
        <h3>Fiabilité</h3>
        <p className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </p>
      </div>
      <p
        className={`toggleContent toggleContent1 ${
          isSection1Visible ? "active" : ""
        }`}
      >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </p>
      <div
        className="toggleBar"
        onClick={() => setSection2Visibility((prev) => !prev)}
      >
        <h3>Respect</h3>
        <p className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </p>
      </div>
      <p
        className={`toggleContent toggleContent2 ${
          isSection2Visible ? "active" : ""
        }`}
      >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
      <div
        className="toggleBar"
        onClick={() => setSection3Visibility((prev) => !prev)}
      >
        <h3>Service</h3>
        <p className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </p>
      </div>
      <p
        className={`toggleContent toggleContent3 ${
          isSection3Visible ? "active" : ""
        }`}
      >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
      <div
        className="toggleBar"
        onClick={() => setSection4Visibility((prev) => !prev)}
      >
        <h3>Sécurité</h3>
        <h3 className="toggleArrow">
          <i className="fa-solid fa-angle-up" style={{ color: "#ffffff" }}></i>
        </h3>
      </div>
      <p
        className={`toggleContent toggleContent4 ${
          isSection4Visible ? "active" : ""
        }`}
      >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </p>
    </div>
  );
};

export default About;
