import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";

function New() {
  const [Tname, setTname] = useState("blazin");
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
    console.log(data.move);
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

  const moveSelect = e => {
    e.preventDefault();
    let val = e.target.value;
    let id = e.target.dataset.moveid;
    console.log(id);
    console.log(val);
    console.log(selectedMoves);
    if (selectedMoves !== []) {
      let valid = true;
      selectedMoves.forEach(move => {
        if (move === val) {
          valid = false;
        }
      });

      if (valid === true) {
        let items = [...selectedMoves];
        let item = { ...items[id - 1] };
        item = val;
        items[id - 1] = item;
        setSelectedMoves(items);
        console.log(selectedMoves);
      }
    } else {
      console.log("test");
      let items = [...selectedMoves];
      let item = { ...items[id - 1] };
      item = val;
      items[id - 1] = item;
      setSelectedMoves(items);
      console.log(selectedMoves);
    }
  };

  const submitModify = e => {
    e.preventDefault();

    if (ability) {
      let valid = true;
      selectedMoves.forEach(move => {
        if (move === "???") {
          console.log(move);
          valid = false;
        } else {
        }
      });

      if (valid === true) {
        let pokemon = {
          pokemon: currentPokemon,
          ability: ability,
          moves: selectedMoves,
          id: id,
          img: currentPokemonImg,
          types: currentTypes
        };
        console.log(pokemon);
        let tempTeam = team;
        tempTeam[id] = pokemon;
        console.log(tempTeam);
        setTeam(tempTeam);
        setModifyModal("closed");
      }
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
