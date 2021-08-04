import React, { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list.component";
import { Search } from "./component/search/Search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    this.getInput = this.getInputValue.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  // getInputValue = (e) => {
  //   this.setState({ searchField: e.target.value });
  // };
  getInputValue(e) {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filtredMonstred = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>The Monsters</h1>
        <Search placeholder='enter name' handleChange={this.getInput} />

        <CardList monsters={filtredMonstred} />
      </div>
    );
  }
}

export default App;
