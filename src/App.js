import React, { Component } from 'react';
import Header from './components/Header';

import "./App.css"

function randomNum() {
  return Math.floor(Math.random() * 255)
}


class App extends Component {
  state = {
    title: "This title is coming from the state!!!",
    color: 'black'
  }

  discoStyle = () => {
    // this.state.color = 'blue'
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
    this.setState({
      color: `rgb(${r}, ${g}, ${b})`
    })
  }

  changeToBlue = () => {
    this.setState({
      color: 'blue'
    })
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1 onClick={ this.changeToBlue } style={{ color: this.state.color}}>Hello World</h1> */}
        <Header 
          handleClick={this.discoStyle}
          color={this.state.color}
          title={this.state.title}
        />
        <input type="text" value={this.state.title} onChange={ this.handleChange } />
        <br />
        <button onClick={this.changeToBlue}>Click Me To Change To Blue</button>
      </div>
    );
  }
}

export default App;
