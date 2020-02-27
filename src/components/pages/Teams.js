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
    <div className="team-page-container">
      {console.log(teams)}
      {teams && teams.teams !== []
        ? teams.map((team, index) => {
            return (
              <div
                className="team-container"
                key={index}
                data-pokemon={JSON.stringify(team)}
              >
                <h2>{team.team.name}</h2>
                <div className="oof">
                  <div className="team-display">
                    {team.team.team.map((mon, index) => {
                      console.log(mon);
                      return (
                        <div className="team-poke-container" key={index}>
                          <img src={mon.img} alt={mon.pokemon.name} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="team-buttons">
                    <button onClick={editTeam}>Edit</button>
                    <button onClick={deleteTeam}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })
        : console.log(teams)}
    </div>
  );
}

export default Teams;
