import React, { Component } from "react";
import Panel from "../panel/Panel";
import Modal from "@material-ui/core/Modal";
import { Paper, Input } from "@material-ui/core";
import "./Builder.css";
class Builder extends Component {
  state = {
    name: "pikachu",
    found: "No Results",
    img: "https://i.ya-webdesign.com/images/pokemon-question-mark-png.png",
    types: [{ type: { name: "???" } }],
    abilities: [{ ability: { name: "???" } }],
    moves: [{ move: { name: "???" } }],
    item: "",
    showPokeSearch: "close",
    showcase: []
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error");
        }
      })
      .catch(console.log("err"))
      .then(json => {
        let pokemon = json.results;
        pokemon.forEach(mon => {
          fetch(mon.url)
            .then(res => res.json())
            .then(json => {
              this.setState({
                showcase: [
                  ...this.state.showcase,
                  { name: json.name, url: json.sprites.front_default }
                ]
              });
            });
        });
      });
  }

  onSubmitName = e => {
    e.preventDefault();
    console.log("test");
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          this.setState({
            found: "No Pokemon Found",
            img:
              "https://i.ya-webdesign.com/images/pokemon-question-mark-png.png",
            types: [{ type: { name: "???" } }],
            abilities: [{ ability: { name: "???" } }],
            moves: [{ move: { name: "???" } }]
          });
        }
      })
      .catch(function() {
        console.log("err");
      })
      .then(json => {
        if (json) {
          console.log(json);
          this.setState({
            found: json.name,
            img: json.sprites.front_default,
            types: json.types,
            abilities: json.abilities,
            moves: json.moves
          });
        }
      });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("test");
  };

  openModal = e => {
    e.preventDefault();
    this.setState({
      showPokeSearch: "open"
    });
  };

  onChange = e => {
    e.preventDefault();
    let x = e.target.name;
    switch (x) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "item":
        this.setState({
          item: e.target.value
        });
        break;
      default:
        break;
    }
  };

  onSelect = e => {
    console.log(e.target.value);
    console.log(e.target.dataset.order);
  };

  onSubmitItem = e => {};


  render() {
    return (
      <div style={styles.container}>
        <div className={this.state.showPokeSearch}>
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            style={styles.searchModal}
          >
            <form style={styles.formModal}>
              <input
                onChange={this.onChange}
                style={styles.searchBar}
                placeholder="serach"
              ></input>
              <div style={styles.preview}>
              {this.state.showcase !== []
                ? this.state.showcase.map((mon, index) => {
                   return(<p>{mon.name}<img style={styles.previewMon} src={mon.url} alt={mon.name}/></p>)
                  })
                : null}

              </div>
            </form>
          </Modal>
        </div>
        <div style={styles.form}>
          <form onSubmit={this.onSubmitName}>
            <label htmlFor="name">Name</label>
            <input
              onClick={async function() {
                // this.fetchList();
                this.setState({ showPokeSearch: "open" });
              }.bind(this)}
              name="name"
              type="text"
              // onClick={this.openModal}
            ></input>
          </form>

          <form>
            <label htmlFor="ability">Ability</label>
            <select id="ability">
              {this.state.abilities !== []
                ? this.state.abilities.map((ability, index) => {
                    return (
                      <option key={index} value={ability.ability.name}>
                        {ability.ability.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </form>

          <form onSubmit={this.onSubmitItem}>
            <label htmlFor="item">Item</label>
            <input name="item"></input>
          </form>

          <form>
            <label htmlFor="moves">Moves</label>
            <select data-order="1" className="moves">
              {this.state.moves !== []
                ? this.state.moves.map((move, index) => {
                    return (
                      <option key={index} value={move.move.name}>
                        {move.move.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <select data-order="2" className="moves">
              {this.state.moves !== []
                ? this.state.moves.map((move, index) => {
                    return (
                      <option key={index} value={move.move.name}>
                        {move.move.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <select data-order="3" className="moves">
              {this.state.moves !== []
                ? this.state.moves.map((move, index) => {
                    return (
                      <option key={index} value={move.move.name}>
                        {move.move.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <select data-order="4" className="moves">
              {this.state.moves !== []
                ? this.state.moves.map((move, index) => {
                    return (
                      <option key={index} value={move.move.name}>
                        {move.move.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </form>
        </div>

        <Panel
          style={styles.panel}
          name={this.state.found}
          img={this.state.img}
          types={this.state.types}
          submit={this.onSubmitPokemon}
        />
      </div>
    );
  }
}

export default Builder;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  panel: {
    marginRight: "0px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formModal: {
    backgroundColor: "darkgray",
    padding: "1rem",
    borderRadius: ".5rem",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection:'column'
  },
  searchModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  searchBar: {
    width: "95%",
    borderRadius: "10px",
    border: "none",
    padding: ".5rem"
  },
  preview:{
    display:'flex',
    flexDirection:'column'
  },
  previewMon:{
    width:'70px'
  }
};
