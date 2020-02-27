import React, { Component } from "react";
import Panel from "../panel/Panel";
// import { Paper, Input } from "@material-ui/core";
//make pokemon images same size
import "./Builder.css";
import { SearchBar } from "../searchBar/SearchBar";
import { GalleryButtons } from "../galleryButtons/GalleryButtons";
import { SingleForm } from "../singleForm/SingleForm";
import Modal from "../modal/Modal";
import PokePreview from "../pokePreview/PokePreview";

class Builder extends Component {
  state = {
    found: "No Results",
    foundItem: "No Results",
    img: "https://i.ya-webdesign.com/images/pokemon-question-mark-png.png",
    types: [{ type: { name: "???" } }],
    abilities: [{ ability: { name: "???" } }],
    moves: [{ move: { name: "???" } }],
    name: "",
    item: "",
    showPokeSearch: "closed",
    showItemSearch: "closed",
    showcase: [],
    itemList: [],
    next: "",
    previous: "",
    nextItem: "",
    previousItem: "",
    selectedPokemon: "",
    selectedAbility: "",
    selectedMoves: [],
    team: []
  };

  getInfo(url) {
    //https://pokeapi.co/api/v2/pokemon/?limit=1000
    try {
      return fetch(url).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return "error";
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    await this.getInfo("https://pokeapi.co/api/v2/item/?limit=6").then(data => {
      let items = data.results;
      if (data.previous) {
        this.setState({ previousItem: data.previous });
      }

      if (data.next) {
        this.setState({ nextItem: data.next });
      }

      items.forEach(item => {
        this.getInfo(item.url).then(json => {
          this.setState({
            itemList: [
              ...this.state.itemList,
              { name: json.name, img: json.sprites.default }
            ]
          });
        });
      });
    });

    await this.getInfo("https://pokeapi.co/api/v2/pokemon/?limit=9").then(
      data => {
        let pokemon = data.results;
        this.setState({ next: data.next, previous: data.previous });
        pokemon.forEach(mon => {
          this.getInfo(mon.url).then(json => {
            this.setState({
              showcase: [
                ...this.state.showcase,
                { name: json.name, url: json.sprites.front_default }
              ]
            });
          });
        });
      }
    );
  }

  selectedMove = e => {
    e.preventDefault();
    let id = e.target.dataset.order;
    let move = e.target.value;
    let valid = false;
    console.log(id, move);
    switch (id) {
      case "1":
        console.log("set");
        let items = [...this.state.selectedMoves];
        let item = { ...items[0] };
        item.name = move;
        items[0] = item;
        this.setState({ selectedMoves: items });
        break;
      case "2":
        this.state.selectedMoves.forEach(mov => {
          console.log(mov);
          if (mov.name === move) {
            console.log("err");
            valid = false;
          } else {
            valid = true;
          }
        });
        if (valid === true) {
          console.log("true");
          let items = [...this.state.selectedMoves];
          let item = { ...items[1] };
          item.name = move;
          items[1] = item;
          this.setState({ selectedMoves: items });
        }

        break;
      case "3":
        this.state.selectedMoves.forEach(mov => {
          console.log(mov);
          if (mov.name === move) {
            console.log("err");
            valid = false;
          } else {
            valid = true;
          }
        });
        if (valid === true) {
          console.log("true");
          let items = [...this.state.selectedMoves];
          let item = { ...items[2] };
          item.name = move;
          items[2] = item;
          this.setState({ selectedMoves: items });
        }
        break;
      case "4":
        this.state.selectedMoves.forEach(mov => {
          console.log(mov);
          if (mov.name === move) {
            console.log("err");
            valid = false;
          } else {
            valid = true;
          }
        });
        if (valid === true) {
          console.log("true");
          let items = [...this.state.selectedMoves];
          let item = { ...items[3] };
          item.name = move;
          items[3] = item;
          this.setState({ selectedMoves: items });
        }
        break;
      default:
        break;
    }
  };

  onSubmitPokemon = e => {
    e.preventDefault();
    let pokemon = this.state.found;
    let abil = this.state.selectedAbility;
    let item = this.state.foundItem;
    let moves = this.state.selectedMoves;
    let newPokemon = { name: pokemon, abil: abil, item: item, moves: moves };
    this.setState({
      selectedPokemon: [...this.state.selectedPokemon, newPokemon]
    });
    console.log(this.state.selectedPokemon);
  };

  onSubmitItem = e => {
    e.preventDefault();
    let item = this.state.item;
    if (item.includes(" ")) {
      item = item.replace(/ /g, "-");
    }
    this.getInfo(`https://pokeapi.co/api/v2/item/${item}`).then(json => {
      console.log("json");
      console.log(json);
      if (json === "error" || json.count) {
        console.log("error test true");
        this.setState({ foundItem: "No Item Found" });
      } else {
        this.setState({ foundItem: json.name, showItemSearch: "closed" });
      }
      //don't set state in async
      console.log(this.state.foundItem);
    });
  };

  onSubmitName = e => {
    e.preventDefault();
    this.getInfo(
      `https://pokeapi.co/api/v2/pokemon/${this.state.name.toLowerCase()}`
    ).then(json => {
      if (json === "error" || json.count) {
        this.setState({
          found: "No Pokemon Found",
          img:
            "https://i.ya-webdesign.com/images/pokemon-question-mark-png.png",
          types: [{ type: { name: "???" } }],
          abilities: [{ ability: { name: "???" } }],
          moves: [{ move: { name: "???" } }]
        });
      } else {
        this.setState({
          found: json.name,
          img: json.sprites.front_default,
          types: json.types,
          abilities: json.abilities,
          moves: json.moves,
          showPokeSearch: "closed",
          selectedAbility: json.abilities[0]
        });
      }
    });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ showPokeSearch: "open" });
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

  monSelected = e => {
    let mon = JSON.parse(e.target.dataset.pokemon);
    this.getInfo(`https://pokeapi.co/api/v2/pokemon/${mon.name}`).then(data => {
      this.setState({
        found: data.name,
        img: data.sprites.front_default,
        types: data.types,
        abilities: data.abilities,
        selectedAbility: data.abilities[0],
        showPokeSearch: "closed"
      });
      data.moves.forEach(mov => {
        this.setState({
          moves: [...this.state.moves, mov]
        });
      });
      console.log(this.state.moves[0].move);
    });
  };

  itemSelected = e => {
    let item = JSON.parse(e.target.dataset.pokemon);
    this.getInfo(`https://pokeapi.co/api/v2/item/${item.name}`).then(data => {
      this.setState({
        foundItem: data.name,
        showItemSearch: "closed"
      });
    });
  };

  next = e => {
    e.preventDefault();
    this.setState({
      showcase: []
    });
    this.getInfo(this.state.next).then(data => {
      let pokemon = data.results;
      console.log(data.previous);
      this.setState({ next: data.next, previous: data.previous });
      pokemon.forEach(mon => {
        this.getInfo(mon.url).then(json => {
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

  previous = e => {
    e.preventDefault();
    this.setState({
      showcase: []
    });
    this.getInfo(this.state.previous).then(data => {
      let pokemon = data.results;
      this.setState({ next: data.next, previous: data.previous });
      pokemon.forEach(mon => {
        this.getInfo(mon.url).then(json => {
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

  nextItem = e => {
    e.preventDefault();
    this.setState({
      itemList: []
    });
    this.getInfo(this.state.nextItem).then(data => {
      let items = data.results;
      this.setState({ nextItem: data.next, previousItem: data.previous });
      items.forEach(item => {
        this.getInfo(item.url).then(json => {
          this.setState({
            itemList: [
              ...this.state.itemList,
              { name: json.name, url: json.sprites.default }
            ]
          });
        });
      });
    });
  };

  previousItem = e => {
    e.preventDefault();
    this.setState({
      itemList: []
    });
    this.getInfo(this.state.previousItem).then(data => {
      let items = data.results;
      this.setState({ nextItem: data.next, previousItem: data.previous });
      items.forEach(item => {
        this.getInfo(item.url).then(json => {
          this.setState({
            itemList: [
              ...this.state.itemList,
              { name: json.name, url: json.sprites.default }
            ]
          });
        });
      });
    });
  };

  map(arr) {
    if (arr !== []) {
      return (
        <div style={styles.preview}>
          {arr.map((item, index) => {
            return (
              <PokePreview
                key={index}
                item={JSON.stringify(item)}
                selected={item.url ? this.monSelected : this.itemSelected}
                name={item.name}
                url={item.url ? item.url : item.img}
              />
            );
          })}
        </div>
      );
    }
  }

  selectedAbility = e => {
    e.preventDefault();
    this.setState({
      selectedAbility: e.target.value
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <Modal
          content={
            <div style={styles.modalContent}>
              <SearchBar
                submit={this.onSubmitItem}
                name="item"
                onChange={this.onChange}
                placeholder="Item"
                errorField="closed"
              />
              {this.map(this.state.itemList)}
              <GalleryButtons
                next={this.nextItem}
                previous={this.previousItem}
              />
            </div>
          }
          class={this.state.showItemSearch}
        />

        <Modal
          content={
            <div style={styles.modalContent}>
              <SearchBar
                submit={this.onSubmitName}
                name="name"
                onChange={this.onChange}
                placeholder="Pokemon"
                errorField="closed"
              />
              {this.map(this.state.showcase)}
              <GalleryButtons next={this.next} previous={this.previous} />
            </div>
          }
          class={this.state.showPokeSearch}
        />

        <div style={styles.form}>
          <SingleForm
            modalOpen={function() {
              this.setState({ showPokeSearch: "open" });
            }.bind(this)}
            submit={this.onSubmitName}
            name="name"
            label="Name"
          />

          <form>
            <label htmlFor="ability">Ability</label>
            <select onChange={this.selectedAbility} id="ability">
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

          <SingleForm
            modalOpen={function() {
              this.setState({ showItemSearch: "open" });
            }.bind(this)}
            label="Item"
            submit={this.onSubmitItem}
            name="item"
            val={this.state.foundItem}
          />
          {/*make an array for the select and pass in info through props */}
          <form>
            <label htmlFor="moves">Moves</label>
            <select
              onChange={this.selectedMove}
              data-order="1"
              className="moves"
            >
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

            <select
              onChange={this.selectedMove}
              data-order="2"
              className="moves"
            >
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

            <select
              onChange={this.selectedMove}
              data-order="3"
              className="moves"
            >
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

            <select
              onChange={this.selectedMove}
              data-order="4"
              className="moves"
            >
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
  modalContent: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  preview: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    backgroundColor: "gray"
  }
};
