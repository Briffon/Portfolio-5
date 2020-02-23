import React, { Component } from "react";
import PokePreview from "../pokePreview/PokePreview";
import GalleryButtons from "../galleryButtons/GalleryButtons";
import Suggestion from "../suggestions/Suggestions";

class Pokedex extends Component {
  state = {
    allPokemon: [],
    itemList: [],
    showcase: [],
    next: "",
    nextItem: "",
    previous: "",
    previousItem: "",
    search: "",
    suggestions: [],
    showSuggestion: "closed",
    selectedPokemon: [],
    isRunning: false
  };

  async componentDidMount() {
    //on load fetch itemd data and set to list
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

    //on load fetch pokemon data and set to showcase
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

    //search for all pokemon
    await this.getInfo("https://pokeapi.co/api/v2/pokemon/?limit=1000").then(
      data => {
        let pokemon = data.results;
        pokemon.forEach(mon => {
          this.setState({
            allPokemon: [...this.state.allPokemon, mon.name]
          });
        });
      }
    );
  }

  getInfo(url) {
    //https://pokeapi.co/api/v2/pokemon/?limit=1000
    //try fetching from given url
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

  nextMon = e => {
    e.preventDefault();
    //clear showcase
    this.setState({
      showcase: []
    });
    //fetch the next set of pokemon
    this.getInfo(this.state.next).then(data => {
      //get the pokemon
      let pokemon = data.results;
      //set next and previous data
      this.setState({ next: data.next, previous: data.previous });
      //fetch and store each pokemon in the showcase
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

  previousMon = e => {
    e.preventDefault();
    //clear the showcase
    this.setState({
      showcase: []
    });
    //fetch the previous data
    this.getInfo(this.state.previous).then(data => {
      //store the pokemon
      let pokemon = data.results;
      //set next and previous data
      this.setState({ next: data.next, previous: data.previous });
      //fetch and store each pokemon
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

  submitChange = e => {
    let length = e.target.value.length;
    let allMons = this.state.allPokemon;
    let term = e.target.value;
    let suggestions = [];

    if (length >= 4) {
      allMons.forEach(mon => {
        if (mon.includes(term)) {
          suggestions.push(mon.charAt(0).toUpperCase() + mon.slice(1));
        }
      });

      let newArr = [];

      suggestions.forEach(newMon => {
        if (this.state.suggestions !== []) {
          this.state.suggestions.forEach(oldMon => {
            if (newMon !== oldMon) {
              newArr.push(newMon);
            }
          })

        } else {
          suggestions = newArr
        }
      })
      newArr = suggestions;
      this.setState({
        suggestions: newArr,
        showSuggestion: 'open'
      })

    } else if (length < 3) {
      this.setState({
        showSuggestion: "closed"
      });
    }
  };

  pokemonSelected = e => {
    e.preventDefault();
    this.setState({
      selectedPokemon: e.target.innerHTML,
    });
  };

  render(props) {

    return (
      <div className="dex-container">
        <img
          className="dex-img"
          src="https://www.pinclipart.com/picdir/big/257-2576119_pokedex-icon-free-png-and-svg-download-clipart.png"
          alt="dex"
        />
        <form className="dex-search" onSubmit={this.submitSearch}>
          <input onChange={this.submitChange} placeholder="Search.." />
          {this.state.suggestions !== [] ? (
            <Suggestion
              select={this.props.selected}
              show={this.state.showSuggestion}
              suggestions={this.state.suggestions}
            />
          ) : null}
        </form>
        <div className="dex">
          {this.state.showcase.length === 9
            ? this.state.showcase.map((mon, index) => {
              let data = JSON.stringify(mon);
              return (
                <PokePreview
                  key={index}
                  item={data}
                  selected={this.props.selected}
                  name={mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
                  url={mon.url}
                />
              );
            })
            : null}
        </div>
        <GalleryButtons next={this.nextMon} previous={this.previousMon} />
      </div>
    );
  }
}

export default Pokedex;
