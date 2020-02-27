import React from "react";

import TableOfContents from "../tableOfContents/TableOfContents";
function Resources() {
  return (
    <div className="resources-content">
      <TableOfContents
        mobileSections={[
          "IVs",
          "EVs",
          "Moves",
          "Natures",
          "Items",
          "Breeding",
          "Helpful Resources",
          "Formats",
          "Strategies"
        ]}
        sections={[
          {
            name: "Fundamentals",
            indexs: [
              "Moves",
              "IVs",
              "EVs",
              "Natures",
              "Items",
              "Breeding",
              "Helpful Resources"
            ]
          },
          { name: "Battle", indexs: ["Formats", "Strategies"] }
        ]}
      />
      <article className="resource-text">
        <section className="starters">
          <h2>Starters</h2>
          <p>
            The goal of a Pokémon battle is to reduce all of your opponent’s
            Pokémon Health Points (HP) to 0. To do this we use our Pokémon fight
            against theirs. How do. I gain advantages over my enemy? How do I
            max the potential of my Pokémon? There’s a lot to cover to answer
            these questions and more. I will be going over what stats, moves,
            breeding and other must knows for you. I have indexed sections below
            if you are refreshing yourself on topics or seek to know more, good
            luck trainers!
          </p>
        </section>
        <section className="fundamentals">
          <h2>Fundamentals</h2>
          <p>
            To start off let’s look at resources each Pokémon has. Each Pokémon
            has a move pool consists of up to 4 moves. Moves or attacks have a{" "}
            <span>Type</span>, <span>Power</span>, <span>Accuracy</span>{" "}
            <span>Category</span> and <span>PP</span>.
            <ul>
              <li>
                <a href="">Stab Attacks</a>
              </li>
              <li>
                <a href="">Special and Physical</a>
              </li>
              <li>
                <a href="">Status</a>
              </li>
              <li>
                <a href="">Power</a>
              </li>
              <li>
                <a href="">PP</a>
              </li>
            </ul>
            <div className="stab">
              <span>Same</span>
              <span>Attack</span>
              <span>Bonus</span>
            </div>
            <p>
              The primus of <span>Stab</span> attacks is that if the type of the
              move match one of the typing’s on the Pokémon using the attack
              gets a 50% damage boost. Normally you would want your Pokémon to
              have at least one <span>stab</span> attack in their move pool for
              the bonus.
            </p>
          </p>
        </section>
      </article>
    </div>
  );
}

export default Resources;
