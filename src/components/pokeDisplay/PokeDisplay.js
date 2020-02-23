import React from "react";
import TypeBubble from '../typeBubble/TypeBubble'

const PokeDisplay = props => {
    return (
        <div>
            <img src={props.pokemon.sprites.front_default} />
            <p>{props.pokemon.name}</p>
            {props.pokemon.types !== [] ? props.pokemon.types.map((type, index) => {
                return <TypeBubble key={index} type={type.type.name} />
            }) : null}
            <button onClick={props.edit}>Edit</button>
        </div>
    );
};

export default PokeDisplay
