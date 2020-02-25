import React, { useState, useEffect } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("teams")) {
      let teams = localStorage.getItem("teams");
      let parsed = JSON.parse(teams);
      console.log(parsed);
      setTeams([...parsed.teams]);
    }
  }, []);

  const editTeam = e => {
    e.preventDefault();
  };

  const deleteTeam = e => {
    e.preventDefault();
  };
  return (
    <div>
      {console.log(teams)}
      {teams && teams.teams !== []
        ? teams.map((team, index) => {
            return (
              <div key={index} data-pokemon={JSON.stringify(team)}>
                <h2>{team.team.name}</h2>
                {team.team.team.map((mon, index) => {
                  console.log(mon);
                  return (
                    <div key={index}>
                      <img src={mon.img} alt={mon.pokemon.name} />
                      <p>{mon.pokemon.name}</p>
                    </div>
                  );
                })}
                <button onClick={editTeam}>Edit</button>
                <button onClick={deleteTeam}>Delete</button>
              </div>
            );
          })
        : console.log(teams)}
    </div>
  );
}

export default Teams;
