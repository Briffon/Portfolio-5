import React, { useState, useEffect } from "react";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import AddPokemon from "../addPokemon/AddPokemon";
import Pokedex from "../pokedex/Pokedex";
import PokeDisplay from "../pokeDisplay/PokeDisplay";
import ModifyPokemon from "../modifyPokemon/ModifyPokemon";
import EditPokemon from "../editPokemon/EditPokemon";
import SubmitTeam from "../submitTeam/SubmitTeam";
import TempSelector from "../tempSelector/TempSelector";

function Builder() {
  const [teamName, setTeamName] = useState("");
  const [showInitModal, setInitModal] = useState("open");
  const [errorFields, setErrorFields] = useState([]);
  const [team, setTeam] = useState();
  const [count, setCount] = useState(team ? team.team.length : 0);
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
  const [currentTeam, setCurrentTeam] = useState({});

  useEffect(() => {
    if (localStorage.getItem("tempTeam")) {
      let team = localStorage.getItem("tempTeam");
      let parsed = JSON.parse(team);
      console.log(parsed);
      setTeam(parsed);
      setCount(parsed.team.length);
      setTeamName(parsed.name);
      setInitModal("closed");
    }
  }, []);

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
        setMovePool([...data.moves]);
        setAbility(data.abilities[0]);
        setId(count);
        setCurrentTypes(data.types);
      });
    await setCount(count + 1);
    setShowAddModal("closed");
    setModifyModal("open");
    setSelectedMoves([]);
  };

  const edit = e => {
    e.preventDefault();
    let id = e.target.parentElement.dataset.pokemon;
    let data = team.team[id];
    console.log(data);
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

    selectedMoves.forEach(move => {
      if (move.name === val) {
        valid = false;
        //display error here
      }
    });

    if (valid === true) {
      let temp = selectedMoves;
      temp[id - 1] = { name: val, id: parseInt(id) - 1 };
      setSelectedMoves(temp);
    }
  };

  const submitEdit = e => {
    e.preventDefault();
    setShowEditModal("closed");

    //set new moves
  };

  const deletePokemon = e => {
    e.preventDefault();
    let index = team.team.indexOf(currentPokemon); //get index of selected pokemon
    console.log(index);
    let mon = team.team.slice(index, 1); // take out the selected
    console.log(mon);
    let tempTeam = team.team.filter(poke => poke !== mon[0]);
    console.log(tempTeam);
    tempTeam = { name: teamName, team: [...tempTeam] };
    console.log(tempTeam);
    localStorage.setItem("tempTeam", JSON.stringify(tempTeam));
    setTeam(tempTeam);
    setCount(tempTeam.team.length);
    setShowEditModal("closed");
  };

  const submitTeam = e => {
    e.preventDefault();
    if (team.team != undefined) {
      if (team.team.length === 6) {
        setSubmitModal("open");
      }
    }
  };

  const returnTo = e => {
    e.preventDefault();
    setSubmitModal("closed");
  };

  const analyzeTeam = e => {
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
        //cleat temp teams from storage
        if (localStorage.getItem("tempTeam")) {
          localStorage.removeItem("tempTeam");
        }
      } else {
        console.log("dup");
        localStorage.removeItem("tempTeam");
      }
    } else {
      console.log("test");
      let tempTemp = { teams: [{ name: teamName, team: team }] };
      localStorage.setItem("teams", JSON.stringify(tempTemp));
      setTeam([]);
      localStorage.removeItem("tempTeam");
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
    let valid = true;
    console.log(parsed);
    if (!(selectedMoves.length >= 4)) {
      selectedMoves.forEach(move => {
        if (move.name === parsed.move.name) {
          console.log(move, parsed.move.name);
          valid = false;
        }
      });

      if (valid === true) {
        setSelectedMoves([
          ...selectedMoves,
          { name: parsed.move.name, id: selectedMoves.length }
        ]);
      } else {
        //display error
      }
    }
    console.log(selectedMoves);
  };

  const submitMods = e => {
    e.preventDefault();

    if (selectedMoves.length === 4) {
      //add pokemon to team
      setModifyModal("closed");

      console.log(team);
      if (team !== undefined) {
        if (!(team.team.length >= 6)) {
          let pokemon = {
            pokemon: currentPokemon,
            ability: ability,
            moves: selectedMoves,
            id: id,
            img: currentPokemonImg,
            types: currentTypes
          };
          console.log(team);
          setTeam({ name: teamName, team: [...team.team, pokemon] });

          //save team incase user adds a pokemon
          //set local storage = team pokemon added
          localStorage.setItem(
            "tempTeam",
            JSON.stringify({ name: teamName, team: [...team.team, pokemon] })
          );

          //when a team is submitted clear the storage
        }
      } else {
        let pokemon = {
          pokemon: currentPokemon,
          ability: ability,
          moves: selectedMoves,
          id: id,
          img: currentPokemonImg,
          types: currentTypes
        };
        console.log(team);
        setTeam({ name: teamName, team: [pokemon] });
        //set local storage = team pokemon added
        localStorage.setItem(
          "tempTeam",
          JSON.stringify({ name: teamName, team: [pokemon] })
        );
      }
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
            //display error
          }
        })
        .then(json => {
          if (!(selectedMoves.length >= 4)) {
            selectedMoves.forEach(move => {
              console.log(move);
            });
            setSelectedMoves([
              ...selectedMoves,
              { name: json.name, id: selectedMoves.length }
            ]);
          }
        });
    } catch (e) {
      console.log(e);
      //display error
    }
  };

  //check for dup moves and set current pokemon
  return (
    <div className={`builder-container`}>
      <Modal
        click={() => console.log("test")}
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
      {console.log("current")}
      {console.log(currentPokemon)}
      <Modal
        click={() => console.log("test")}
        class={`edit-modal ` + showEditModal}
        content={
          <EditPokemon
            pokemon={currentPokemon}
            selectedMoves={currentPokemon ? currentPokemon.moves : null}
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
        {console.log(team)}
        <AddPokemon
          submitTeam={submitTeam}
          click={addPokemonClick}
          count={count}
        />
        {team && team.team !== []
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

export default Builder;
