import React, { useState, useEffect } from "react";
import TypeBubble from "../typeBubble/TypeBubble";

function Analyze() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("teams")) {
      let team = localStorage.getItem("team");
      let parsed = JSON.parse(team);
      console.log(parsed);
      setTeams([...teams, parsed]);
    }
  }, []);

  function monWeaknesses(mon) {
    mon.weaknesses = {
      normal: 0,
      fire: 0,
      fighting: 0,
      water: 0,
      flying: 0,
      grass: 0,
      poison: 0,
      electric: 0,
      ground: 0,
      psychic: 0,
      rock: 0,
      ice: 0,
      bug: 0,
      dragon: 0,
      ghost: 0,
      dark: 0,
      steel: 0,
      fairy: 0
    };
    mon.types.forEach(type => {
      console.log(type.type.name);
      switch (type.type.name) {
        case "fire":
          mon.weaknesses.ground = mon.weaknesses.ground + 2;
          mon.weaknesses.rock = mon.weaknesses.rock + 2;
          mon.weaknesses.water = mon.weaknesses.water + 2;
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          if (mon.weaknesses.steel > -2) {
            mon.weaknesses.steel = mon.weaknesses.steel - 2;
          }
          if (mon.weaknesses.fire > -2) {
            mon.weaknesses.fire = mon.weaknesses.fire - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          if (mon.weaknesses.ice > -2) {
            mon.weaknesses.ice = mon.weaknesses.ice - 2;
          }
          if (mon.weaknesses.fairy > -2) {
            mon.weaknesses.fairy = mon.weaknesses.fairy;
          }
          break;

        case "flying":
          mon.weaknesses.rock = mon.weaknesses.rock + 2;
          mon.weaknesses.electric = mon.weaknesses.electric + 2;
          mon.weaknesses.ground = mon.weaknesses.ground - 500;
          mon.weaknesses.ice = mon.weaknesses.ice + 2;
          if (mon.weaknesses.fighting > -2) {
            mon.weaknesses.fighting = mon.weaknesses.fighting - 2;
          }
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          break;

        case "normal":
          mon.weaknesses.fighting = mon.weaknesses.fighting + 2;
          mon.weaknesses.ghost = mon.weaknesses.ghost - 500;
          break;

        case "poison":
          mon.weaknesses.ground = mon.weaknesses.ground + 2;
          mon.weaknesses.psychic = mon.weaknesses.psychic + 2;
          if (mon.weaknesses.fight > -2) {
            mon.weaknesses.fight = mon.weaknesses.fight - 2;
          }
          if (mon.weaknesses.poison > -2) {
            mon.weaknesses.poison = mon.weaknesses.poison - 2;
          }
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          if (mon.weaknesses.fairy > -2) {
            mon.weaknesses.fairy = mon.weaknesses.fairy;
          }
          break;

        case "ground":
          mon.weaknesses.water = mon.weaknesses.water + 2;
          mon.weaknesses.grass = mon.weaknesses.grass + 2;
          mon.weaknesses.ice = mon.weaknesses.ice + 2;
          if (mon.weaknesses.poison > -2) {
            mon.weaknesses.poison = mon.weaknesses.poison - 2;
          }
          if (mon.weaknesses.rock > -2) {
            mon.weaknesses.rock = mon.weaknesses.rock - 2;
          }
          break;

        case "rock":
          mon.weaknesses.fighting = mon.weaknesses.fighting + 2;
          mon.weaknesses.ground = mon.weaknesses.ground + 2;
          mon.weaknesses.steel = mon.weaknesses.steel + 2;
          mon.weaknesses.water = mon.weaknesses.water + 2;
          mon.weaknesses.grass = mon.weaknesses.grass + 2;
          if (mon.weaknesses.normal > -2) {
            mon.weaknesses.normal = mon.weaknesses.normal - 2;
          }
          if (mon.weaknesses.flying > -2) {
            mon.weaknesses.flying = mon.weaknesses.flying - 2;
          }
          if (mon.weaknesses.poison > -2) {
            mon.weaknesses.poison = mon.weaknesses.poison - 2;
          }
          if (mon.weaknesses.fire > -2) {
            mon.weaknesses.fire = mon.weaknesses.fire - 2;
          }
          break;

        case "ghost":
          mon.weaknesses.normal = mon.weaknesses.normal - 500;
          mon.weaknesses.fighting = mon.weaknesses.fighting - 500;
          mon.weaknesses.ghost = mon.weaknesses.ghost + 2;
          mon.weaknesses.dark = mon.weaknesses.dark + 2;

          if (mon.weaknesses.poison > -2) {
            mon.weaknesses.poison = mon.weaknesses.poison - 2;
          }
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          break;

        case "steel":
          mon.weaknesses.fighting = mon.weaknesses.fighting + 2;
          mon.weaknesses.ground = mon.weaknesses.ground + 2;
          mon.weaknesses.fire = mon.weaknesses.fire + 2;
          mon.weaknesses.poison = mon.weaknesses.poison - 500;
          if (mon.weaknesses.normal > -2) {
            mon.weaknesses.normal = mon.weaknesses.normal - 2;
          }
          if (mon.weaknesses.flying > -2) {
            mon.weaknesses.flying = mon.weaknesses.flying - 2;
          }
          if (mon.weaknesses.rock > -2) {
            mon.weaknesses.rock = mon.weaknesses.rock - 2;
          }
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          if (mon.weaknesses.steel > -2) {
            mon.weaknesses.steel = mon.weaknesses.steel - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          if (mon.weaknesses.psychic > -2) {
            mon.weaknesses.psychic = mon.weaknesses.psychic - 2;
          }
          if (mon.weaknesses.ice > -2) {
            mon.weaknesses.ice = mon.weaknesses.ice - 2;
          }
          if (mon.weaknesses.dragon > -2) {
            mon.weaknesses.dragon = mon.weaknesses.dragon - 2;
          }
          if (mon.weaknesses.fairy > -2) {
            mon.weaknesses.fairy = mon.weaknesses.fairy - 2;
          }
          break;

        case "water":
          mon.weaknesses.grass = mon.weaknesses.grass + 2;
          mon.weaknesses.electric = mon.weaknesses.electric + 2;
          if (mon.weaknesses.steel > -2) {
            mon.weaknesses.steel = mon.weaknesses.steel - 2;
          }
          if (mon.weaknesses.water > -2) {
            mon.weaknesses.water = mon.weaknesses.water - 2;
          }
          if (mon.weaknesses.ice > -2) {
            mon.weaknesses.ice = mon.weaknesses.ice - 2;
          }
          if (mon.weaknesses.fire > -2) {
            mon.weaknesses.fire = mon.weaknesses.fire - 2;
          }

          break;

        case "grass":
          mon.weaknesses.flying = mon.weaknesses.flying + 2;
          mon.weaknesses.poison = mon.weaknesses.poison + 2;
          mon.weaknesses.bug = mon.weaknesses.bug + 2;
          mon.weaknesses.fire = mon.weaknesses.fire + 2;
          mon.weaknesses.ice = mon.weaknesses.ice + 2;

          if (mon.weaknesses.ground > -2) {
            mon.weaknesses.ground = mon.weaknesses.ground - 2;
          }
          if (mon.weaknesses.water > -2) {
            mon.weaknesses.water = mon.weaknesses.water - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          if (mon.weaknesses.electric > -2) {
            mon.weaknesses.electric = mon.weaknesses.electric - 2;
          }
          break;

        case "electric":
          mon.weaknesses.ground = mon.weaknesses.ground + 2;
          if (mon.weaknesses.flying > -2) {
            mon.weaknesses.flying = mon.weaknesses.flying - 2;
          }
          if (mon.weaknesses.steel > -2) {
            mon.weaknesses.steel = mon.weaknesses.steel - 2;
          }
          if (mon.weaknesses.electric > -2) {
            mon.weaknesses.electric = mon.weaknesses.electric - 2;
          }
          break;

        case "psychic":
          mon.weaknesses.bug = mon.weaknesses.bug + 2;
          mon.weaknesses.ghost = mon.weaknesses.ghost + 2;
          mon.weaknesses.dark = mon.weaknesses.dark + 2;
          if (mon.weaknesses.fighting > -2) {
            mon.weaknesses.fighting = mon.weaknesses.fighting - 2;
          }
          if (mon.weaknesses.psychic > -2) {
            mon.weaknesses.psychic = mon.weaknesses.psychic - 2;
          }
          break;

        case "ice":
          mon.weaknesses.fighting = mon.weaknesses.fighting + 2;
          mon.weaknesses.rock = mon.weaknesses.rock + 2;
          mon.weaknesses.steel = mon.weaknesses.steel + 2;
          mon.weaknesses.fire = mon.weaknesses.fire + 2;

          if (mon.weaknesses.ice > -2) {
            mon.weaknesses.ice = mon.weaknesses.ice - 2;
          }
          break;

        case "dragon":
          mon.weaknesses.ice = mon.weaknesses.ice + 2;
          mon.weaknesses.dragon = mon.weaknesses.dragon + 2;
          mon.weaknesses.fairy = mon.weaknesses.fairy + 2;
          if (mon.weaknesses.electric > -2) {
            mon.weaknesses.electric = mon.weaknesses.electric - 2;
          }
          if (mon.weaknesses.water > -2) {
            mon.weaknesses.water = mon.weaknesses.water - 2;
          }
          if (mon.weaknesses.grass > -2) {
            mon.weaknesses.grass = mon.weaknesses.grass - 2;
          }
          if (mon.weaknesses.fire > -2) {
            mon.weaknesses.fire = mon.weaknesses.fire - 2;
          }
          break;

        case "fairy":
          mon.weaknesses.poison = mon.weaknesses.poison + 2;
          mon.weaknesses.steel = mon.weaknesses.steel + 2;
          mon.weaknesses.dragon = mon.weaknesses.dragon - 500;
          if (mon.weaknesses.fighting > -2) {
            mon.weaknesses.fighting = mon.weaknesses.fighting - 2;
          }
          if (mon.weaknesses.bug > -2) {
            mon.weaknesses.bug = mon.weaknesses.bug - 2;
          }
          if (mon.weaknesses.dark > -2) {
            mon.weaknesses.dark = mon.weaknesses.dark - 2;
          }
          break;

        case "dark":
          mon.weaknesses.fighting = mon.weaknesses.fighting + 2;
          mon.weaknesses.bug = mon.weaknesses.bug + 2;
          mon.weaknesses.psychic = mon.weaknesses.psychic - 500;
          mon.weaknesses.fairy = mon.weaknesses.fairy + 2;
          if (mon.weaknesses.ghost > -2) {
            mon.weaknesses.ghost = mon.weaknesses.ghost - 2;
          }
          if (mon.weaknesses.dark > -2) {
            mon.weaknesses.dark = mon.weaknesses.dark - 2;
          }
          break;
      }
    });
  }

  return (
    <div className="analyze-container">
    {teams ? console.log(teams):null}
      {teams ? (
        teams.map((team, index) => {
          return (
            <div className="analyze-top" key={index}>
              <h2>{team.name}</h2>
              {team.team.map((mon, index) => {
                return (
                  <div className="analyze-content" key={index}>
                    <img src={mon.img} alt={mon.pokemon.name} />
                    <p>{mon.pokemon.name}</p>
                    {monWeaknesses(mon)}
                    <div className="analyze-poke-container">
                      {mon.weaknesses
                        ? Object.keys(mon.weaknesses).map((weak, index) => {
                            if (mon.weaknesses[weak] > 0) {
                              return (
                               <div className="analyze-weaknesses">
                                    <TypeBubble
                                      weak={mon.weaknesses[weak]}
                                      type={weak}
                                    />
                                  </div>
                              );
                            }
                          })
                        : null}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <h2>No Teams Saved</h2>
      )}
    </div>
  );
}

export default Analyze;
