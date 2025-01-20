import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Dave',
      age: 40
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}. You are {this.state.age} years old
          </p>
          <button onClick={() => {
            this.setState({name: 'Andrei', age: '20'});
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
