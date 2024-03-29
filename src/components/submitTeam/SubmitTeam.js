import React from "react";
import TypeBubble from "../typeBubble/TypeBubble";
import { NavLink } from "react-router-dom";
const SubmitTeam = props => {
  return (
    <div className="submit-team-container">
      <h2>{props.teamName}</h2>
      <div className="submit-team-pokemon">
        {props.team && props.team.team !== []
          ? props.team.team.map((mon, index) => {
            return (
              <div key={index} className="submit-pokemon">
                <img src={mon.img} alt={mon.pokemon.name} />
                <div className="type-container">
                  {mon.types.map((type, index) => {
                    return <TypeBubble key={index} type={type.type.name} />;
                  })}
                </div>
              </div>
            );
          })
          : null}
      </div>
      <div className="submit-team-mods">
        <button onClick={props.edit}>Edit</button>
        <NavLink to="/Analyze" onClick={props.analyze} >
          Analyze
        </NavLink>
      </div>
    </div>
  );
};
export default SubmitTeam;
