import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from '../pokeDisplay/PokeDisplay'

function New() {
    const [Tname, setTname] = useState("Chase Sucks");
    const [showInitModal, setInitModal] = useState("closed");
    const [errorFields, setErrorFields] = useState([]);
    const [team, setTeam] = useState([]);
    const [count, setCount] = useState(team.length);
    const [showAddModal, setShowAddModal] = useState("closed");
    const [modifyModal, setModifyModal] = useState("closed");

    const submitTeamName = e => {
        e.preventDefault();
        if (Tname !== "") {
            setInitModal("closed");
        } else {
            let valid = false;
            errorFields.forEach(error => {
                if (error.name === "Team Name") {
                    valid = true;
                }
            });
            if (valid === false) {
                setErrorFields([...errorFields, { name: "Team Name" }]);
            }
        }
    };

    const addPokemonClick = e => {
        e.preventDefault();
        setShowAddModal("open");
    };


    const closeDex = async (e) => {
        e.preventDefault();
        let data = JSON.parse(e.target.dataset.pokemon);
        fetch('https://pokeapi.co/api/v2/pokemon/' + data.name)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTeam([...team, data]);
            })

        await setCount(count + 1);
        setShowAddModal('closed');
    };

    const edit = e => {
        e.preventDefault();
        console.log(e);
    }


    return (
        <div className={`builder-container`}>
            <Modal
                class={`modal-dex ` + showAddModal}
                content={
                    <div>
                        <Pokedex selected={closeDex} close={closeDex} />
                    </div>
                }
            />
            <Modal
                class={`modal-team-name ` + showInitModal}
                content={
                    <div className={`modal-content`}>
                        <SingleForm
                            submit={submitTeamName}
                            button={<button type="submit">Confirm</button>}
                            placeholder="Enter name"
                            label="Team Name"
                            name="name"
                            type="text"
                            onChange={e => setTname(e.target.value)}
                        />
                    </div>
                }
            />
            <h2>{Tname}</h2>

            <div className="pokemon-container">
                <AddPokemon click={addPokemonClick} count={count} />
                {team !== [] ? team.map((mon, index) => {
                    return <PokeDisplay edit={edit} pokemon={mon} key={index} />
                }) : null}

            </div>
        </div>
    );
}

export default New;
