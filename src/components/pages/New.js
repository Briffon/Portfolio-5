import React, { useState } from 'react';
import { SingleForm } from '../singleForm/SingleForm';
import Modal from '../modal/Modal';
import AddPokemon from '../addPokemon/AddPokemon';
import Pokedex from '../pokedex/Pokedex';

function New() {
    const [Tname, setTname] = useState('Chase Sucks');
    const [showInitModal, setInitModal] = useState('closed');
    const [errorFields, setErrorFields] = useState([]);
    const [team, setTeam] = useState([]);
    const [count, setCount] = useState(team.length)
    const [showAddModal, setShowAddModal] = useState('open');

    const submitTeamName = (e) => {
        e.preventDefault();
        if (Tname !== '') {
            setInitModal('closed')
        } else {
            let valid = false;
            errorFields.forEach(error => {
                if (error.name === 'Team Name') {
                    valid = true
                }
            })
            if (valid === false) {
                setErrorFields([...errorFields, { name: 'Team Name' }])
            }
        }
    }

    const addPokemonClick = (e) => {
        e.preventDefault();
        setShowAddModal('open')
    }


    return (
        <div className={`builder-container`}>
            <Modal class={`modal-dex ` + showAddModal} content={
                <div>
                    <Pokedex />
                </div>} />
            <Modal class={`modal-team-name ` + showInitModal} content={
                <div className={`modal-content`}>
                    <SingleForm submit={submitTeamName} button={<button type="submit">Confirm</button>} placeholder="Enter name" label="Team Name" name="name" type="text" onChange={(e) => setTname(e.target.value)} />
                </div>
            } />
            <h2>{Tname}</h2>

            <div className="pokemon-container">
                <AddPokemon click={addPokemonClick} count={count} />
            </div>

        </div >
    )
}

export default New;
