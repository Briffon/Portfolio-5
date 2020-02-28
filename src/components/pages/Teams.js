import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
    let team = e.target.dataset.team;

    localStorage.setItem("tempTeam", team);
  };

  const deleteTeam = e => {
    e.preventDefault();

    let team = e.target.dataset.team;
    let teams = localStorage.getItem("teams");
    let id = e.target.dataset.index;
    if (teams.includes(team)) {
      {
        console.log(id);
        // let parsedTeam = JSON.parse(team);
        let parsedTeams = JSON.parse(teams);
        parsedTeams.teams.splice(id, 1);
        console.log(parsedTeams);
        localStorage.setItem("teams", JSON.stringify(parsedTeams));

        // console.log(parsedTeams);
        // let id = parsedTeams.teams.indexOf(parsedTeam);
        // console.log(id);
      }
    }
  };
  return (
    <div className="team-page-container">
      {console.log(teams)}
      {teams && teams.teams !== [] ? (
        teams.map((team, index) => {
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
                  {/* <button
                    data-index={index}
                    data-team={JSON.stringify(team)}
                    onClick={editTeam}
                  >
                    Edit
                  </button> */}
                  <NavLink
                    to="/Builder"
                    data-index={index}
                    data-team={JSON.stringify(team)}
                    onClick={editTeam}
                  >
                    Edit
                  </NavLink>
                  {/* <button
                    data-index={index}
                    data-team={JSON.stringify(team)}
                    onClick={deleteTeam}
                  >
                    Delete
                  </button> */}
                  <NavLink
                    data-index={index}
                    data-team={JSON.stringify(team)}
                    to="/Teams"
                    onClick={deleteTeam}
                  >
                    Delete
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No Teams</h2>
      )}
    </div>
  );
}

export default Teams;
