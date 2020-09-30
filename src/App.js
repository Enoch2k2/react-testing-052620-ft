import React, { Component } from 'react';
import Nav from './components/Nav';
import PetForm from './containers/PetForm';
import PetList from './containers/PetList';
import "./App.css"

class App extends Component {
  // this.state.pets [{name: "Fido", species: "Dog"}]
  state = {
    pets: [],
    renderForm: true
  }

  addPet = pet => {
    this.setState({
      pets: [...this.state.pets, pet],
      renderForm: false
    })
  }

  onView = (view) => {
    if(view === "list") {
      this.setState({
        renderForm: false
      })
    } else {
      this.setState({
        renderForm: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav onView={this.onView}/>
        { this.state.renderForm ? <PetForm addPet={this.addPet} /> : <PetList pets={this.state.pets} />}
      </div>
    );
  }
}

export default App;
