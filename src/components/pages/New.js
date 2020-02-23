import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";

function New() {
  const [Tname, setTname] = useState("Chase Sucks");
  const [showInitModal, setInitModal] = useState("closed");
  const [errorFields, setErrorFields] = useState([]);
  const [team, setTeam] = useState([]);
  const [count, setCount] = useState(team.length);
  const [showAddModal, setShowAddModal] = useState("closed");
  const [modifyModal, setModifyModal] = useState("closed");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentPokemonImg, setCurrentPokemonImg] = useState("");
  const [movePool, setMovePool] = useState([{ move: { name: "???" } }]);
  const [ability, setAbility] = useState({});
  const [selectedMoves, setSelectedMoves] = useState([
    "???",
    "???",
    "???",
    "???"
  ]);

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

  const closeDex = async e => {
    e.preventDefault();
    let data = JSON.parse(e.target.dataset.pokemon);
    console.log(data.move);
    fetch("https://pokeapi.co/api/v2/pokemon/" + data.name)
      .then(res => res.json())
      .then(data => {
        setTeam([...team, data]);
        setCurrentPokemon(data);
        setCurrentPokemonImg(data.sprites.front_default);
        setMovePool([...movePool, ...data.moves]);
      });
    await setCount(count + 1);
    setShowAddModal("closed");
    setModifyModal("open");
  };

  const edit = e => {
    e.preventDefault();
    console.log(e);
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
        if (move == val) {
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

  const submitModify =e=>{
      
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
      <Modal
        class={`modal-modify ` + modifyModal}
        content={
          <ModifyPokemon
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
              return <PokeDisplay edit={edit} pokemon={mon} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}

export default New;
