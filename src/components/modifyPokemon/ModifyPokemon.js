import React from 'react';

function ModifyPokemon(props) {
    return (
        <div className="modify-container">
            <div className="modify-header">
                <img src={props.img} />
                <p>{props.pokemon.name}</p>
            </div>
            <div className="pokeForm">
                <form>
                    <select onChange={props.abilityChange}>
                        {props.pokemon.abilities ? props.pokemon.abilities.map((abil, index) => {
                            return <option key={index} value={abil.ability.name}>{abil.ability.name}</option>
                        }) : null}
                    </select>
                    <select onChange={props.abilityChange}>
                        {props.pokemon.moves ? props.pokemon.moves.map((move, index) => {
                            return <option key={index} value={move.move.name}>{move.move.name}</option>
                        }) : null}
                    </select>
                </form>
            </div>
        </div >
    )
}

export default ModifyPokemon;