import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h2>Make Compettive Pokemon Teams Today!</h2>
      <img
        className="desk-hero"
        src={require("../../art/pokemonhero.png")}
        alt="hero background"
      />
      <img
        className="mobile-hero"
        src={require("../../art/mobilehero.png")}
        alt="hero background"
      />
      <NavLink to="/Builder" className="cta">
        Create a Team!
      </NavLink>

      <div className="info">
        <h3>What is Pokemon Advisor?</h3>
        <p>
          Pokemon Advisor is an application to help you create highly compettive
          teams! This application is built for beginniers and verterans to the
          scene.
        </p>
      </div>

      <div className="info">
        <h3>How does is work?</h3>
        <p>
          Pokemon Advisor is an application to help you create highly compettive
          teams! This application is built for beginniers and verterans to the
          scene.
        </p>
      </div>
    </div>
  );
}

export default Home;
