import React from "react";

function ModifyPokemon(props) {
  return (
    <div className="modify-container">
      <form className="pokeForm" data-id={props.id} onSubmit={props.submit}>
        <div className="modify-header">
          <img src={props.img} alt={props.pokemon.name} />
          <p>{props.pokemon.name}</p>
        </div>

        <div className="form-input">
          <label htmlFor="abil" value="Ability">
            Ability
          </label>
          <select name="abil" onChange={props.abilityChange}>
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
        </div>

        <div className="form-input">
          <label htmlFor="move1" value="Move 1">
            Move 1
          </label>
          <select name="move1" data-moveid="1" onChange={props.moveChange}>
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
        </div>

        <div className="form-input">
          <label htmlFor="move2" value="Move 2">
            Move 2
          </label>
          <select name="move2" data-moveid="2" onChange={props.moveChange}>
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
        </div>

        <div className="form-input">
          <label htmlFor="move3" value="Move 3">
            Move 3
          </label>
          <select name="mov3" data-moveid="3" onChange={props.moveChange}>
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
        </div>

        <div className="form-input">
          <label htmlFor="move4" value="Move 4">
            Move 4
          </label>
          <select name="move4" data-moveid="4" onChange={props.moveChange}>
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ModifyPokemon;
