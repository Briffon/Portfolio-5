import React, { Component } from "react";

class TempSelector extends Component {


  render(props) {
   
    return (
      <div className="move-search">
        {console.log(this.props.pokemon)}
        <img
          src={
            this.props.pokemon.sprites
              ? this.props.pokemon.sprites.front_default
              : null
          }
          alt={this.props.pokemon.name}
        />
        <div className="move-list">
          {this.props.selectedMoves
            ? this.props.selectedMoves.map((move, index) => {
                return <p key={index}>{move}</p>;
              })
            : null}
        </div>
        <label htmlFor="abil" value="Ability">
          Ability
        </label>
        <select name="abil" onChange={this.props.abilityChange}>
          {this.props.pokemon.abilities
            ? this.props.pokemon.abilities.map((abil, index) => {
                return (
                  <option key={index} value={abil.ability.name}>
                    {abil.ability.name}
                  </option>
                );
              })
            : null}
        </select>
        <form className="move-search-form" onSubmit={this.props.submitTerm}>
          <input onChange={this.props.onChange} placeholder="Search move..." />
        </form>
        <ul>
          {this.props.movePool
            ? this.props.movePool.map((move, index) => {
                return (
                  <li
                    data-info={JSON.stringify(move)}
                    onClick={this.props.selectedMove}
                    key={index}
                  >
                    {move.move.name}
                  </li>
                );
              })
            : null}
        </ul>
        <button onClick={this.props.submit}>Submit</button>
      </div>
    );
  }
}

export default TempSelector;
