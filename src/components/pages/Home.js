import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
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
      </section>
      <section className="about">
        <div className="info">
          <h3>What is Pokemon Advisor?</h3>
          <p>
            Pokemon Advisor is an application to help you create highly competitive
            teams! This application is built for beginners and veterans to the
            scene. We will analyze and keep  track of your teams for you, we also provide resources to help get on the right path!
      </p>
        </div>

        <div className="info">
          <h3>How does is work?</h3>
          <p>
            When you have made a team we will analyze it using ours system. This analysis will give you details on your teams weakness and strengths.
            Based on this, we give you suggestions on how to fix some  of the flaws on your team. This analysis is 100% optional and still your decision at
            the end of the day.
      </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
