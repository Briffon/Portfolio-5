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
        <p>kjdhfjhsdkjfhsdkjfnkjsdfnkjsdnvckjdsnfkjnsdfkjndkjsvncjsdnf</p>
      </div>

      <div className="info">
        <h3>What is Pokemon Advisor?</h3>
        <p>kjdhfjhsdkjfhsdkjfnkjsdfnkjsdnvckjdsnfkjnsdfkjndkjsvncjsdnf</p>
      </div>
    </div>
  );
}

export default Home;
