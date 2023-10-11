import React from "react";
import "../styles/Error.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Error = () => {

  // Update page title
    useEffect(() => { document.title = "Kasa - Erreur 404";
      }, []);

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
