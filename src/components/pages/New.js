import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";
import EditPokemon from "../editPokemon/EditPokemon";
import SubmitTeam from "../submitTeam/SubmitTeam";
import TempSelector from "../tempSelector/TempSelector";

function New() {
  const [teamName, setTeamName] = useState("");
  const [showInitModal, setInitModal] = useState("closed");
  const [errorFields, setErrorFields] = useState([]);
  const [team, setTeam] = useState({});
  //   name:teamName,
  //   team: [
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     },
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     },
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     },
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     },
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     },
  //     {
  //       pokemon: {
  //         name: "charizard",
  //         moves: [
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           },
  //           {
  //             move: {
  //               name: "beam"
  //             }
  //           }
  //         ],
  //         abilities: [
  //           {
  //             ability: {
  //               name: "solar-power",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           },
  //           {
  //             ability: {
  //               name: "solar",
  //               url: "https://pokeapi.co/api/v2/ability/94/"
  //             }
  //           }
  //         ]
  //       },
  //       ability: {
  //         ability: {
  //           name: "solar-power",
  //           url: "https://pokeapi.co/api/v2/ability/94/"
  //         }
  //       },
  //       id: 0,
  //       img:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  //       types: [
  //         { type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3" } },
  //         { type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" } }
  //       ],
  //       moves: [
  //         { name: "fire-punch", id: 1 },
  //         { name: "thunder-punch", id: 2 },
  //         { name: "submission", id: 3 },
  //         { name: "ember", id: 4 }
  //       ]
  //     }
  //   ]
  // });
  const [count, setCount] = useState(team.team ? team.team.length : 0);
  const [showAddModal, setShowAddModal] = useState("closed");
  const [modifyModal, setModifyModal] = useState("closed");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentPokemonImg, setCurrentPokemonImg] = useState("");
  const [ability, setAbility] = useState();
  const [movePool, setMovePool] = useState([]);
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [disable, setDisable] = useState("active");
  const [id, setId] = useState(count);
  const [currentTypes, setCurrentTypes] = useState([]);
  const [showEditModal, setShowEditModal] = useState("closed");
  const [submitModal, setSubmitModal] = useState("closed");
  const [analyze, setAnalyze] = useState(false);
  const [moveTerm, setMoveTerm] = useState("");

  const submitTeamName = e => {
    e.preventDefault();
    if (teamName !== "") {
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
        setMovePool([{ move: { name: "???", disabled: true } }, ...data.moves]);
        setAbility(data.abilities[0]);
        setId(count);
        setCurrentTypes(data.types);
      });
    await setCount(count + 1);
    setShowAddModal("closed");
    setModifyModal("open");
    setSelectedMoves([])
  };

  const edit = e => {
    e.preventDefault();
    let id = e.target.parentElement.dataset.pokemon;
    let data = team.team[id];

    setCurrentPokemon(data);
    setShowEditModal("open");
  };

  const editAbility = e => {
    e.preventDefault();
    let val = e.target.value;
    let newAbil = {
      name: val,
      url: `https://pokeapi.co/api/v2/ability/` + val
    };
    currentPokemon.ability = newAbil;
  };

  const editMoves = e => {
    e.preventDefault();
    let valid = true;
    let val = e.target.value;
    let id = e.target.dataset.id;

    currentPokemon.moves.forEach(move => {
      if (move.name === val) {
        valid = false;
        //throw error here
      }
    });

    if (valid === true) {
      currentPokemon.moves[id - 1] = { name: val, id: parseInt(id) };
    }
  };

  const submitEdit = e => {
    e.preventDefault();
    setShowEditModal("closed");
  };

  const deletePokemon = async e => {
    e.preventDefault();
    let index = team.team.indexOf(currentPokemon); //get index of selected pokemon
    let mon = team.team.slice(index, 1); // take out the selcted
    let tempTeam = team.team.filter(poke => poke !== mon[0]);
    tempTeam = { name: teamName, team: tempTeam };
    setTeam(tempTeam);
    setCount(tempTeam.team.length);
    setShowEditModal("closed");
  };

  const submitTeam = e => {
    e.preventDefault();
    if (team.team.length === 6) {
      setSubmitModal("open");
    }
  };

  const returnTo = e => {
    e.preventDefault();
    setSubmitModal("closed");
  };

  const analyzeTeam = e => {
    e.preventDefault();
    let teamString = JSON.stringify(team);
    localStorage.setItem("team", teamString);

    if (localStorage.getItem("teams")) {
      let temp = JSON.parse(localStorage.getItem("teams"));
      let valid = true;
      temp.teams.forEach(oldTeam => {
        if (JSON.stringify(oldTeam.team) === JSON.stringify(team)) {
          valid = false;
        }
      });

      if (valid === true) {
        temp.teams.push({ team });
        let newTeam = JSON.stringify(temp);
        localStorage.setItem("teams", newTeam);
        //take to new page
      } else {
        console.log("dup");
      }
    } else {
      let tempTemp = { teams: [{ team }] };
      localStorage.setItem("teams", JSON.stringify(tempTemp));
      //take to new page
    }
  };

  const selectedAbility = e => {
    e.preventDefault();
    setAbility(e.target.value);
  };

  const moveSelection = e => {
    e.preventDefault();
    let parsed = JSON.parse(e.target.dataset.info);
    console.log(parsed);
    if (!(selectedMoves.length >= 4)) {
      console.log("test");
      setSelectedMoves([...selectedMoves, parsed.move.name]);
    }
    console.log(selectedMoves);
  };

  const submitMods = e => {
    e.preventDefault();

    if (selectedMoves.length === 4) {
      setModifyModal("closed");
    }
  };

  const onChangeMove = e => {
    setMoveTerm(e.target.value);
  };

  const submitTerm = e => {
    e.preventDefault();

    try {
      fetch("https://pokeapi.co/api/v2/move/" + moveTerm)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error;
          }
        })
        .then(json => {
          if (!(selectedMoves.length >= 4)) {
            setSelectedMoves([...selectedMoves, json.name]);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  //check for dup moves and set current pokemon
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
              onChange={e => setTeamName(e.target.value)}
            />
          </div>
        }
      />
      <Modal
        class={`modal-modify ` + modifyModal}
        content={
          <TempSelector
            selectedMove={moveSelection}
            pokemon={currentPokemon}
            movePool={movePool}
            submitTerm={submitTerm}
            onChange={onChangeMove}
            abilityChange={selectedAbility}
            submit={submitMods}
            selectedMoves={selectedMoves}
          />
        }
      ></Modal>
      <Modal
        class={`edit-modal ` + showEditModal}
        content={
          <EditPokemon
            pokemon={currentPokemon}
            selectedMoves={currentPokemon.moves}
            onChangeAbility={editAbility}
            onChangeMoves={editMoves}
            submit={submitEdit}
            delete={deletePokemon}
          />
        }
      ></Modal>

      <Modal
        class={`submit-team-modal ${submitModal}`}
        content={
          <SubmitTeam
            analyze={analyzeTeam}
            edit={returnTo}
            teamName={teamName}
            team={team}
          />
        }
      />
      <h2>{teamName}</h2>

      <div className="pokemon-container">
        <AddPokemon
          submitTeam={submitTeam}
          click={addPokemonClick}
          count={count}
        />
        {team.team && team.team !== []
          ? team.team.map((mon, index) => {
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
