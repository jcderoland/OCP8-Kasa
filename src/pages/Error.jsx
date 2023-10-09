import React from "react";
import "../styles/Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorMessage">
      {/* Display 404 error message */}
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retouner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
