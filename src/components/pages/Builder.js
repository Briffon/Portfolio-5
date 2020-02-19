import React, { Component } from "react";
import Panel from "../panel/Panel";
// import { Paper, Input } from "@material-ui/core";
//make pokemon images same size
//seperate into components
//make forms external
//300 line is too much (maybe 150)
import "./Builder.css";
import { SearchBar } from "../searchBar/SearchBar";
import { GalleryButtons } from "../galleryButtons/GalleryButtons";
import { SingleForm } from "../singleForm/SingleForm";
class Builder extends Component {
  state = {
    name: "",
    found: "No Results",
    img: "https://i.ya-webdesign.com/images/pokemon-question-mark-png.png",
    types: [{ type: { name: "???" } }],
    abilities: [{ ability: { name: "???" } }],
    moves: [{ move: { name: "???" } }],
    item: "",
    showPokeSearch: "closed",
    showItemSerach: 'closed',
    showcase: [],
    itemList: [],
    next: "",
    previous: "",
    nextItem: '',
    previousItem: '',
    selectedPokemon: '',
    team: [],
  };

  getInfo(url) {
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return ('error')
        }
      })
      .catch(console.log('API error'))
  }

  async componentDidMount() {
    await this.getInfo('https://pokeapi.co/api/v2/item/?limit=6')
      .then(data => {
        let items = data.results;
        this.setState({ nextItem: data.next })
        items.forEach(mon => {
          this.getInfo(mon.url)
            .then(json => {
              this.setState({
                itemList: [
                  ...this.state.itemList,
                  { name: json.name, img: json.sprites.default }
                ]
              })
            })
        })
      })

    await this.getInfo('https://pokeapi.co/api/v2/pokemon/?limit=9')
      .then(data => {
        let pokemon = data.results;
        this.setState({ next: data.next });
        pokemon.forEach(mon => {
          this.getInfo(mon.url)
            .then(json => {
              this.setState({
                showcase: [
                  ...this.state.showcase,
                  { name: json.name, url: json.sprites.front_default }
                ]
              });
            });
        });
      })
  }

  onSubmitPokemon = e => {
    e.preventDefault();
  }

  onSubmitName = (e) => {
    e.preventDefault();
    this.getInfo(`https://pokeapi.co/api/v2/pokemon/${this.state.name.toLowerCase()}`)
      .then(json => {
        console.log(json)
        if (json == 'error' || json.count) {
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
            showPokeSearch: 'closed',
          });
        }
      })
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
    this.getInfo(`https://pokeapi.co/api/v2/pokemon/${mon.name}`)
      .then(data => {
        this.setState({
          found: data.name,
          img: data.sprites.front_default,
          types: data.types,
          abilities: data.abilities,
          moves: data.moves,
          showPokeSearch: 'closed',
        })
      })
  };

  onSubmitItem = e => {
    e.preventDefault();
  };

  next = e => {
    e.preventDefault();
    this.setState({
      showcase: []
    });
    this.getInfo(this.state.next)
      .then(data => {
        let pokemon = data.results;
        this.setState({ next: data.next })
        pokemon.forEach(mon => {
          this.getInfo(mon.url)
            .then(json => {
              this.setState({
                showcase: [
                  ...this.state.showcase,
                  { name: json.name, url: json.sprites.front_default }
                ]
              });
            });
        });

      })
  };

  render() {
    return (
      <div style={styles.container}>

        <div style={styles.modal} className={this.state.showItemSerach}>
          <div style={styles.modalContent}>
            <SearchBar name="item" onChange={this.onChange} placeholder="item" nFound="closed" />
            <div style={styles.preview}>
              {this.state.itemList !== [] ? this.state.itemList.map((item, index) => {
                return <div style={styles.itemWrap} key={index}> <p>{item.name}</p><img src={item.img} alt={item.name} /></div>;
              }) : null}
            </div>
            <GalleryButtons />
          </div>
        </div>

        <div style={styles.modal} className={this.state.showPokeSearch}>
          <div style={styles.modalContent}>
            <SearchBar submit={this.onSubmitName} name="name" onChange={this.onChange} placeholder="Pokemon" nFound="closed" />
            <div style={styles.preview}>
              {this.state.showcase !== []
                ? this.state.showcase.map((mon, index) => {
                  return (
                    <div
                      key={index}
                      style={styles.pokeWrap}
                      onClick={this.monSelected}
                    >
                      <p key={index} data-pokemon={JSON.stringify(mon)}>
                        {mon.name}
                        <img data-pokemon={JSON.stringify(mon)}
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
            <GalleryButtons next={this.next} previous={this.previous} />
          </div>
        </div>

        <div style={styles.form}>
          <SingleForm modalOpen={function () {
            this.setState({ showPokeSearch: "open" });
          }.bind(this)} submit={this.onSubmitName} name="name" label="Name" />

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

          <SingleForm modalOpen={this.showItemSerach} label="Item" submit={this.onSubmitItem} name="item" />

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
  }, modalContent: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: "1rem",
    flexDirection: 'column'
  }, modal: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: "1",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};
