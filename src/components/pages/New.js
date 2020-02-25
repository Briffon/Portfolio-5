import React, { useState } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";
import EditPokemon from "../editPokemon/EditPokemon";
import SubmitTeam from "../submitTeam/SubmitTeam";

function New() {
  const [teamName, setTeamName] = useState("Blazin");
  const [showInitModal, setInitModal] = useState("closed");
  const [errorFields, setErrorFields] = useState([]);
  const [team, setTeam] = useState([]);
  const [count, setCount] = useState(team.length);
  const [showAddModal, setShowAddModal] = useState("closed");
  const [modifyModal, setModifyModal] = useState("closed");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentPokemonImg, setCurrentPokemonImg] = useState("");
  const [movePool, setMovePool] = useState([{ move: { name: "???" } }]);
  const [ability, setAbility] = useState();
  const [selectedMoves, setSelectedMoves] = useState([
    { name: "???", id: "1" },
    { name: "???", id: "2" },
    { name: "???", id: "3" },
    { name: "???", id: "4" }
  ]);
  const [disable, setDisable] = useState("active");
  const [id, setId] = useState(count);
  const [currentTypes, setCurrentTypes] = useState([]);
  const [showEditModal, setShowEditModal] = useState("closed");
  const [submitModal, setSubmitModal] = useState("open");
  const [analyze, setAnalyze] = useState(false);

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
        setSelectedMoves([
          { name: "???", id: "1" },
          { name: "???", id: "2" },
          { name: "???", id: "3" },
          { name: "???", id: "4" }
        ]);
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
    setCurrentPokemon(data);
    setShowEditModal("open");
  };

  const selectedAbility = e => {
    e.preventDefault();
    console.log(e.target.value);
    setAbility(e.target.value);
  };

  const moveSelect = async e => {
    e.preventDefault();
    //get value and id
    let val = e.target.value;
    let id = parseInt(e.target.dataset.moveid);
    console.log(val);
    console.log(id);

    //clear errors and check to see if this move has already been selected
    let empty = [];
    setErrorFields(empty);
    let valid = true;

    let errors = [];
    selectedMoves.forEach((move, index) => {
      if (val === "???") {
        let error = {
          msg: `${val} has already been selected`,
          where: id
        };
        errors = [error];
      } else if (move.name === val && index !== id) {
        valid = false;
        let error = {
          msg: `${val} has already been selected`,
          where: id
        };
        errors.push(error);
      }
    });

    //if erros exits display them
    if (errors.length > 0) {
      setErrorFields([...errors]);
    } else {
      let tempMoves = selectedMoves;
      tempMoves[id - 1] = { name: val, id: id };
      setSelectedMoves(tempMoves);
    }
  };

  const submitModify = e => {
    e.preventDefault();
    let errors = [];
    //need to clear selectors to represent ???
    console.log(selectedMoves);
    for (let i = 0; i < selectedMoves.length; i++) {
      let tempMoves = selectedMoves.slice();
      let index = selectedMoves.indexOf(tempMoves[i]);
      let valid = true;
      tempMoves.splice(i, 1);
      console.log(
        "index :" + i,
        selectedMoves[i].name + " : " + index + "---------------"
      );
      for (let x = 0; x < tempMoves.length; x++) {
        if (
          selectedMoves[i].name === tempMoves[x].name &&
          selectedMoves[i].where === tempMoves[x].where
        ) {
          //if names match but not ids
          console.log("------------found");
          let error = {
            msg: `${selectedMoves[i].name} has already been selected`,
            where: selectedMoves[i].id
          };
          console.log(error);
          //cehck to se fi erros caontisn erros

          if (errors.length > 0) {
            console.log("err chl point");
            errors.forEach(err => {
              //if error name and id match dont add
              if (err.where === error.where) {
                console.log("displaying non unique error -----------------");
                console.log(err);
                console.log(error);
                valid = false;
              }
            });
          }

          if (valid === true) {
            console.log("pushgin err -----------------");
            console.log(error);
            errors.push(error);
          }
        }
      }
    }

    if (errors.length > 0) {
      console.log("displaying errors----------");
      console.log(errors);
      setErrorFields(errors);
    } else {
      let pokemon = {
        pokemon: currentPokemon,
        ability: ability,
        moves: selectedMoves,
        id: id,
        img: currentPokemonImg,
        types: currentTypes
      };
      console.log(team)
      if (team.team) {
        setTeam({ name: teamName, team: [...team.team, pokemon] });
      } else {
        setTeam({ name: teamName, team: [pokemon] })
      }
      e.target.reset();
      setModifyModal("closed");
    }
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
    console.log(currentPokemon);
    setShowEditModal("closed");
  };

  const deletePokemon = e => {
    e.preventDefault();
    console.log(team);
    let index = team.indexOf(currentPokemon); //get index of selected pokemon
    let mon = team.slice(index, 1); // take out the selcted
    console.log(mon);
    let tempTeam = team.filter(poke => poke !== mon[0]);
    setTeam({ name: teamName, team: [...tempTeam] });
    setCount(tempTeam.length);
    setShowEditModal("closed");
  };

  const submitTeam = e => {
    e.preventDefault();
    if (team.team.length === 6) {
      setSubmitModal("open");
    }
    console.log(team);
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
        console.log("pushed");
        temp.teams.push({ team });
        let newTeam = JSON.stringify(temp);
        localStorage.setItem("teams", newTeam);
        console.log(temp);
        //take to new page
      } else {
        console.log("dup");
      }
    } else {
      let tempTemp = { teams: [{ team }] };
      localStorage.setItem("teams", JSON.stringify(tempTemp));
      console.log(tempTemp);
      //take to new page
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
              onChange={e => setTeamName(e.target.value)}
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
      <Modal
        class={`edit-modal ` + showEditModal}
        content={
          <EditPokemon
            pokemon={currentPokemon}
            selectedMoves={currentPokemon.moves}
            onChangeAbility={editAbility}
            onChangeMoves={editMoves}
            submit={submitEdit}
            delte={deletePokemon}
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
        {console.log(team)}
        {/*{team.team !== [] && team.team
        //   ? team.team.map((mon, index) => {
        //     console.log(mon);
        //     return (
        //       <PokeDisplay
        //         id={index}
        //         img={mon.img}
        //         edit={edit}
        //         pokemon={mon}
        //       />
        //     );
        //   })
        //   : null}*/}
        {team.team && team.team !== []
          ? team.team.map((mon, index) => {
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
