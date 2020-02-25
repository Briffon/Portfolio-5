import React from "react";
import TypeBubble from "../typeBubble/TypeBubble";

const SubmitTeam = props => {
  return (
    <div className="submit-team-container">
      {console.log(props.team)}
      <h2>{props.teamName}</h2>
      <div className="submit-team-pokemon">
        {props.team
          ? props.team.map((mon, index) => {
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
        <button onClick={props.analyze}>Analyze</button>
        <button onClick={props.finish}>Finish</button>
      </div>
    </div>
  );
};
export default SubmitTeam;
