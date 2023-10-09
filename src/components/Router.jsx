import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Property from "../pages/Property";
import Error from "../pages/Error";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function RouterComponent() {

  // Check if the URL contains a hash, if not redirect to the hashed version
  if (!window.location.hash) {
    window.location.href = window.location.href + "#/";
  }

  return (
  <Router>
      <Navbar />  {/* Navigation bar component */}

      <Header />  {/* Header component */}

      <Routes>  {/* Define application routes */}
          <Route index path="/" element={<Home />} />  {/* Home route (default route) */}
          <Route path="/about" element={<About />} />  {/* About page route */}
          <Route path="/property/:id" element={<Property />} /> {/* Property details route */}
          <Route path="*" element={<Error />} /> {/* Fallback error route for unmatched paths */}
      </Routes>

      <Footer />  {/* Footer component */}

    </Router>
  );
}

export default RouterComponent;
