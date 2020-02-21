import React from 'react';

const AddPokemon = props => {
    return (
        <div onClick={props.click} className="add-pokemon">
            <img src={require('../../Icons/2.svg')} alt="add pokemon button" />
            <p>Add Pokemon ({props.count}/6)</p>
        </div>
    )
}

export default AddPokemon;