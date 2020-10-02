import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import PetForm from './containers/PetForm';
import PetList from './containers/PetList';
import PetShow from './containers/PetShow';
import Home from './containers/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  const [pets, setPets] = useState([])

  useEffect( () => {
    fetch('http://localhost:3001/pets')
      .then( resp => resp.json() )
      .then( pets => setPets(pets))
  }, [])

  const addPet = pet => {
    setPets([...pets, pet])
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/pets/new" render={ props => <PetForm { ...props } addPet={ addPet } /> } />
          <Route exact path="/pets" render={ props => <PetList { ...props } pets={ pets } />} />
          <Route exact path="/pets/:id" render={ props => <PetShow { ...props } pets={ pets } />} />
          <Route render={ () => <p>This page doesn't exist</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
