import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";

function New() {
    const [Tname, setTname] = useState("Blazin");
    const [showInitModal, setInitModal] = useState("closed");
    const [errorFields, setErrorFields] = useState([]);
    const [team, setTeam] = useState([]);
    const [count, setCount] = useState(team.length);
    const [showAddModal, setShowAddModal] = useState("close");
    const [modifyModal, setModifyModal] = useState("closed");
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [currentPokemonImg, setCurrentPokemonImg] = useState("");
    const [movePool, setMovePool] = useState([{ move: { name: "???" } }]);
    const [ability, setAbility] = useState();
    const [selectedMoves, setSelectedMoves] = useState([
        "???",
        "???",
        "???",
        "???"
    ]);
    const [disable, setDisable] = useState("active");
    const [id, setId] = useState(count);
    const [currentTypes, setCurrentTypes] = useState([]);

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

    const addPokemonClick = async e => {
        e.preventDefault();
        if (count >= 6) {
            await setDisable("disabled");
        }

        if (disable === "active" && !(count >= 6)) {
            console.log(count);
            setShowAddModal("open");
        }
    };

    const closeDex = async e => {
        e.preventDefault();
        let data = JSON.parse(e.target.dataset.pokemon);
        fetch("https://pokeapi.co/api/v2/pokemon/" + data.name)
            .then(res => res.json())
            .then(data => {
                setCurrentPokemon(data);
                setCurrentPokemonImg(data.sprites.front_default);
                setMovePool([{ move: { name: "???" } }, ...data.moves]);
                setSelectedMoves(["???", "???", "???", "???"]);
                setAbility(data.abilities[0]);
                setId(count);
                setCurrentTypes(data.types);
            });
        await setCount(count + 1);
        setShowAddModal("closed");
        setModifyModal("open");
    };

    const edit = e => {
        e.preventDefault();
        let id = e.target.parentElement.dataset.pokemon;
        let data = team[id];
        console.log(data);
    };

    const selectedAbility = e => {
        e.preventDefault();
        console.log(e.target.value);
        setAbility(e.target.value);
    };

    const moveSelect = async e => {
        e.preventDefault();
        //get the move name and id
        let val = e.target.value;
        let id = e.target.dataset.moveid;
        let valid = true;
        let errors = [];
        console.log("---------------------------");
        console.log("id,val, errors and select moves arr");
        console.log(errorFields);
        console.log(id);
        console.log(val);
        console.log(selectedMoves);
        console.log("---------------------------");

        //check for dup moves
        selectedMoves.forEach(move => {
            if (move === val) {
                console.log("beep");
                valid = false;

                let error = {
                    name: "Duplicate Moves",
                    msg: "Please select a different move from the chosen",
                    where: parseInt(id),
                    val: val
                };

                errors.push(error);
            }
        });

        //check for dup erros
        let dupErrors = true;
        console.log(errors);
        errorFields.forEach(oldError => { //for each previous errpr
            errors.forEach(newError => { //compare to new rror
                if (JSON.stringify(oldError) === JSON.stringify(newError)) {
                    console.log("match found");
                    console.log(oldError);
                    console.log(newError);
                    dupErrors = false;
                }
            });
        });

        if (dupErrors == true) {
            setErrorFields([...errorFields, ...errors]);
        }

        if (valid === true && dupErrors === true) {
            let dupMoves = selectedMoves; //temp moves arr
            let dupVal = val; // temp val
            dupMoves[id - 1] = dupVal; //dupmoves = dupval at index
            setSelectedMoves(dupMoves); // set moves = to the duplicate
        }

        console.log("--------------------spicy content");
        console.log(errors)
        console.log(id);

        //are old errors fixed
        let fixed = true;
        errorFields.forEach((error, inde) => {
            if (parseInt(id) === error.where) {
                selectedMoves.forEach((move, index) => {
                    if (move === val) {
                        console.log("match found");
                        fixed = false;
                        console.log("temp");
                        let temp = [];
                        let fixedError = errorFields.splice(inde, 1);
                        console.log(fixedError);
                        errorFields.forEach(error => {
                            if (error !== fixedError) {
                                console.log(error);
                                temp.push(error);
                            }
                        });
                        setErrorFields(temp);
                    }
                });

                if (fixed == true) {
                } else {
                }
            }
        });


        if (errors !== []) {
            console.log("------------")
            console.log(errors)
            console.log(errorFields)
            await setErrorFields(...errorFields, ...errors)
            console.log('-----')
            console.log(errorFields);
        }



        console.log(selectedMoves);
        console.log(errorFields);
    };

    const submitModify = async e => {
        e.preventDefault();

        if (ability) {
            let valid = true;
            let errors = [];
            //check to see if move = ???
            selectedMoves.forEach((move, index) => {
                if (move === "???") {
                    valid = false;
                    let error = {
                        name: "Duplicate Moves",
                        msg: `Please enter a move that wasn't chosen before`,
                        where: index + 1,
                        val: move
                    };
                    errors.push(error);
                }
            });

            //check for dup errors
            let dupErrors = true;
            console.log(errorFields)
            errorFields.forEach(oldError => {
                errors.forEach(newError => {
                    if (JSON.stringify(oldError) === JSON.stringify(newError)) {
                        console.log("match found");
                        console.log(oldError);
                        console.log(newError);
                        dupErrors = false;
                    }
                });
            });

            if (dupErrors == true) {
                setErrorFields([...errorFields, ...errors]);
            }

            //   if (valid === true) {
            //     let pokemon = {
            //       pokemon: currentPokemon,
            //       ability: ability,
            //       moves: selectedMoves,
            //       id: id,
            //       img: currentPokemonImg,
            //       types: currentTypes
            //     };
            //     console.log(pokemon);

            //     check for errors
            //     if (errorFields) {
            //       let currentMoves = selectedMoves;
            //       currentMoves.forEach(moves => {
            //         selectedMoves.forEach(dupMoves => {
            //           if (moves === dupMoves) {
            //             console.log(moves);
            //           }
            //         });
            //       });
            //     }

            //         if (errorFields) {
            //           setErrorFields([]);
            //         }
            //       } else {
            //         let repeat = true; // repeats = none
            //         errors.forEach(newError => {
            //           errorFields.forEach(oldError => {
            //             if (JSON.stringify(newError) === JSON.stringify(oldError)) {
            //               repeat = false; // there is a repeat
            //             }
            //           });
            //         });

            //         if (repeat !== false) {
            //           setErrorFields([...errorFields, ...errors]);
            //         }
            //   }
        }
    };

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
                    <div className={`team-name-container`}>
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
            <Modal
                class={`modal-modify ` + modifyModal}
                content={
                    <ModifyPokemon
                        id={id}
                        errors={errorFields}
                        submit={submitModify}
                        moveChange={moveSelect}
                        movePool={movePool}
                        img={currentPokemonImg}
                        pokemon={currentPokemon}
                        abilityChange={selectedAbility}
                    />
                }
            ></Modal>
            <h2>{Tname}</h2>

            <div className="pokemon-container">
                <AddPokemon click={addPokemonClick} count={count} />
                {team !== []
                    ? team.map((mon, index) => {
                        console.log(mon);
                        return (
                            <PokeDisplay
                                id={index}
                                img={mon.img}
                                edit={edit}
                                pokemon={mon}
                                key={index}
                            />
                        );
                    })
                    : null}
            </div>
        </div>
    );
}

export default New;
