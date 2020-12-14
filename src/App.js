import React, { Component } from "react";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "asf111", name: "Premnath", age: 29 },
      { id: "asf222", name: "Priyadharsini", age: 27 },
      { id: "asf333", name: "Pichaimuthu", age: 57 },
      { id: "asf444", name: "Padmavathy", age: 42 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personInx = this.state.persons.findIndex((prsn) => {
      return prsn.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personInx]);
    const person = { ...this.state.persons[personInx] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personInx] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    //mutation
    //const persons = this.state.persons;
    //non mutation
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styles = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let Persons = null;

    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
      styles.backgroundColor = "red";
      styles[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) classes.push("red");
    if (this.state.persons.length <= 1) classes.push("bold");

    return (
      <div className="App">
        <header className="App-header">
          <p>Hi i am REACT app</p>
          <p className={classes.join(" ")}>This is really working</p>
          <StyleRoot>{Persons}</StyleRoot>
          <button style={styles} onClick={this.togglePersonsHandler}>
            Toggle Show
          </button>
        </header>
      </div>
    );
  }
}

export default Radium(App);
