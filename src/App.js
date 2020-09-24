import React, { Component } from 'react';
import Header from './components/Header';
import PetForm from './components/PetForm';
import PetList from './components/PetList';
import "./App.css"

class App extends Component {
  // this.state.pets [{name: "Fido", species: "Dog"}]
  state = {
    pets: []
  }

  addPet = pet => {
    this.setState({
      pets: [...this.state.pets, pet]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PetForm addPet={this.addPet} />
        <PetList pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
