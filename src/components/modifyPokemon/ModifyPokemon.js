import React from "react";

function ModifyPokemon(props) {
  return (
    <div className="modify-container">
      <div className="modify-header">
        <img src={props.img} />
        <p>{props.pokemon.name}</p>
      </div>
      <div className="pokeForm">
        <form onSubmit={props.submit}>
          <select onChange={props.abilityChange}>
            {props.pokemon.abilities
              ? props.pokemon.abilities.map((abil, index) => {
                  return (
                    <option key={index} value={abil.ability.name}>
                      {abil.ability.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select data-moveid="1" onChange={props.moveChange}>
            {props.movePool
              ? props.movePool.map((move, index) => {
                  return (
                    <option key={index} value={move.move.name}>
                      {move.move.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select data-moveid="2" onChange={props.moveChange}>
            {props.movePool
              ? props.movePool.map((move, index) => {
                  return (
                    <option key={index} value={move.move.name}>
                      {move.move.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select data-moveid="3" onChange={props.moveChange}>
            {props.movePool
              ? props.movePool.map((move, index) => {
                  return (
                    <option key={index} value={move.move.name}>
                      {move.move.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select data-moveid="4" onChange={props.moveChange}>
            {props.movePool
              ? props.movePool.map((move, index) => {
                  return (
                    <option key={index} value={move.move.name}>
                      {move.move.name}
                    </option>
                  );
                })
              : null}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModifyPokemon;
