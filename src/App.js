import React, { Component } from 'react';
import Nav from './components/Nav';
import PetForm from './containers/PetForm';
import PetList from './containers/PetList';
import PetShow from './containers/PetShow';
import Home from './containers/Home';
import { connect } from 'react-redux';

import { fetchPets } from './actions/petActions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  // this.state.pets [{name: "Fido", species: "Dog"}]
  state = {
    pets: []
  }

  componentDidMount() {
    this.props.fetchPets(); 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets/new" component={ PetForm } />
            <Route exact path="/pets" component={ PetList } />
            <Route exact path="/pets/:id" render={ props => <PetShow { ...props } pets={ this.state.pets } />} />
            <Route render={ () => <p>This page doesn't exist</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPets: pets => dispatch(addPets(pets))
//   }
// }

export default connect(null, { fetchPets })(App);
