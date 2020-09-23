import React, { Component } from 'react';
import Header from './components/Header';

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Header title={"This is an even better title from the APP js!!!!"} />
      </div>
    );
  }
}

export default App;
