import React from "react";

import TableOfContents from '../tableOfContents/TableOfContents'
function Resources() {
  return (
    <div className="resources-content">
      <h2>Starters</h2>
      <p>
        The goal of a Pokémon battle is to reduce all of your opponent’s Pokémon Health Points (HP) to 0. To do this we use our Pokémon fight against theirs.  How do. I gain advantages over my enemy? How do I max the potential of my Pokémon? There’s a lot to cover to answer these questions and more. I will be going over what stats, moves, breeding and other must knows for you. I have indexed sections below if you are refreshing yourself on topics or seek to know more, good luck trainers!
      </p>
      <TableOfContents
        sections={[
          { name: 'Fundamentals', indexs: ['IVs', 'EVs', 'Moves', "Natures", 'Items', 'Breeding', 'Helpful Resources'] },
          { name: 'Battle', indexs: ['Formats', 'Strategies'] }
        ]} />

    </div>
  );
}

export default Resources;
