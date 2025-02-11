import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'a1',
          name: 'Linda',
        },
        {
          id: 'a2',
          name: 'Frank',
        },
        {
          id: 'a3',
          name: 'Jacky',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
