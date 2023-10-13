import React from "react";
import Cards from "../components/Cards";
import { useEffect } from "react";

function Home() {

    // Update page title
    useEffect(() => { document.title = "Kasa - Page d'accueil";
      }, []);

  // Display the Cards component on the Home page
  return <Cards />;
}

export default Home;
