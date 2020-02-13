import React, { Component } from "react";
import Panel from "../panel/Panel";

class Builder extends Component {
  state = {
    name: "",
    found: "",
    img:''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          this.setState({
            found: "No Pokemon Found"
          });
        }
        throw new Error(res)

      })
      .then(json => {
        console.log(json)
        this.setState({
          found:json.name,
          img:json.sprites.front_default
        })
      });
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };
  render() {
    return (
      <div style={styles.container}>
        <form onSubmit={this.onSubmit}>
          <label for="name">Name</label>
          <input onChange={this.onChange} name="name"></input>
        </form>
        <Panel style={styles.panel} name={this.state.found} img={this.state.img} />
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
  }
};
