import React from "react";
import "../styles/Header.scss";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  if (location.pathname.includes("/property/")) return null;

  return (
    <header>
      <svg
        // viewBox="0 0 1240 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{ mixBlendMode: "darken" }} opacity="0.3">
          <rect width="1240" height="223" rx="25" fill="black" />
        </g>
      </svg>
      <h1>Chez vous, partout et ailleurs</h1>
    </header>
  );
}

export default Header;
