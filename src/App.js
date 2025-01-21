import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Dave", lastName: "Dent" },
      age: 40,
      company: "Google",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}. I am{" "}
            {this.state.age} years old. I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              // this.setState({name: {firstName: 'Andrei', lastName: 'Alan'}, age: '20'});
              this.setState(
                () => {
                  return {
                    name: { firstName: "Andrei", lastName: "Alan" },
                    age: "20",
                  };
                },
                () => {
                  // follow up call back after async set state changes
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
