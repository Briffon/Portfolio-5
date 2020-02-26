import React, { useState, useEffect } from "react";

function Analyze() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("teams")) {
      let team = localStorage.getItem("team");
      let parsed = JSON.parse(team);
      console.log(parsed);
      setTeam([...parsed.team]);
    }
  }, []);

  const monWeaknesses = (types) => {

    console.log(types)
    // switch (types) {
    //   case 'fire':
    //     break
    //   default:
    //     break;
    // }
  }
  return <div className="analyze-container">{team.map.length > 0 ? team.map((mon, index) => {
    console.log(mon);
    return (
      <div key={index} className="analyze-pokemon">
        <img src={mon.img} alt={mon.pokemon.name} />
        <p>{mon.pokemon.name}</p>

        <div className="weakness-container">
          {monWeaknesses(mon.pokemon.types)}
        </div>
      </div>
    )
  }) : null}</div>;
}

export default Analyze;
