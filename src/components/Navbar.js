import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
