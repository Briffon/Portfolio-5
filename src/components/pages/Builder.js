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
    showcase: [],
    next: "",
    previous: ""
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=9")
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
        this.setState({ next: json.next });
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

  monSelected = e => {
    console.log(e.target.parentElement.dataset.pokemon);
    let mon = JSON.parse(e.target.parentElement.dataset.pokemon);
    console.log(mon.name);
  };

  onSubmitItem = e => {};

  next = e => {
    e.preventDefault();
    this.setState({
      showcase: []
    });
    fetch(this.state.next)
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
        this.setState({ next: json.next });
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
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.Modal} className={this.state.showPokeSearch}>
          <div style={styles.modalContent}>
          <form style={styles.formModal}>
            <input
              onChange={this.onChange}
              style={styles.searchBar}
              placeholder="serach"
            ></input>
            <div className="closed">Not Found</div>
          </form>
          <div style={styles.preview}>
            {this.state.showcase !== []
              ? this.state.showcase.map((mon, index) => {
                  return (
                    <div
                      key={index}
                      data-pokemon={JSON.stringify(mon)}
                      style={styles.pokeWrap}
                      onClick={this.monSelected}
                    >
                      <p key={index}>
                        {mon.name}
                        <img
                          style={styles.previewImg}
                          src={mon.url}
                          alt={mon.name}
                        />
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div style={styles.buttons}>
            <button onClick={this.previous}>></button>
            <input onClick={this.next} type="button" value="<"></input>
          </div>
          </div>
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
    justifyContent: "space-between",
    position: "relative"
  },
  panel: {
    marginRight: "0px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  formModal: {
    maxWidth: "50%"
  },
  Modal: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: "1",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },modalContent:{
    width:'50%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  searchBar: {
    width: "95%",
    borderRadius: "10px",
    border: "none",
    padding: ".5rem"
  },
  preview: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    backgroundColor: "gray"
  },
  previewPic: {
    width: "60px"
  },
  pokeWrap: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "1rem"
  }
};
