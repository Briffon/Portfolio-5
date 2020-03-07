import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("teams")&& JSON.parse(localStorage.getItem("teams")).length!==0) {
      let teams = localStorage.getItem("teams");
      let parsed = JSON.parse(teams);
      console.log(parsed);
      setTeams([...parsed.teams]);
    }
  }, []);

  const editTeam = e => {
    let index = e.target.dataset.index;
    let team = teams[index];
    localStorage.setItem('tempTeam',JSON.stringify(team.team))
  };

  const deleteTeam = e => {
    e.preventDefault();
    let index = e.target.dataset.index;
    let tempTeam = teams;
    tempTeam.splice(index,1);
    setTeams(tempTeam);
    localStorage.setItem('teams',JSON.stringify(tempTeam));
  };
  return (
    <div className="team-page-container">
    {teams.length === 0 ?<h2 className="empty">NO TEAMS </h2> :null}
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
                    <NavLink data-index={index} to="/Builder" onClick={editTeam} >
                      <button data-index={index}>Edit</button>
                    </NavLink>
                    <NavLink data-index={index} to="/Teams" onClick={deleteTeam} >
                      <button data-index={index}>Delete</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })
        : <h2>NO TEAMS</h2>}
    </div>
  );
}

export default Teams;
