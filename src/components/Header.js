import React from "react";
import "../styles/Header.scss";
import { useLocation } from "react-router-dom";
import headerImage from "../assets/images/homeImage1.png";

function Header() {
  const location = useLocation();
  if (location.pathname.includes("/property/")) return null;

  return (
    <header>
      <img src={headerImage} alt="headerImage" className="headerImage" />
      <h1>Chez vous, partout et ailleurs</h1>
    </header>
  );
}

export default Header;
