import React, { Component } from 'react';
import Nav from './components/Nav';
import PetForm from './containers/PetForm';
import PetList from './containers/PetList';
import PetShow from './containers/PetShow';
import Home from './containers/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  // this.state.pets [{name: "Fido", species: "Dog"}]
  state = {
    pets: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/pets')
      .then( resp => resp.json() )
      .then( pets => this.setState({ pets }))
  }

  addPet = pet => {
    this.setState({
      pets: [...this.state.pets, pet]
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets/new" render={ props => <PetForm { ...props } addPet={ this.addPet } /> } />
            <Route exact path="/pets" render={ props => <PetList { ...props } pets={ this.state.pets } />} />
            <Route exact path="/pets/:id" render={ props => <PetShow { ...props } pets={ this.state.pets } />} />
            <Route render={ () => <p>This page doesn't exist</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
