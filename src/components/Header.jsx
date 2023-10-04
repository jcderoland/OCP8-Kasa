import React from "react";
import "../styles/Header.scss";
import { useLocation } from "react-router-dom";
import headerImage from "../assets/images/homeImage1.png";

function Header() {
  // Get the current route location
  const location = useLocation();

  // Hide the header for specific routes (property details and about page)
  if (
    location.pathname.includes("/property/") ||
    location.pathname === "/about"
  ) {
    return null;
  }

  return (
    <header>
      {/* Display the main header image */}
      <img src={headerImage} alt="headerImage" className="headerImage" />
      <h1>Chez vous, partout et ailleurs</h1>
    </header>
  );
}

export default Header;
