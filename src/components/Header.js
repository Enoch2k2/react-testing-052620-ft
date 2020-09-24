import React from 'react';

function randomNum() {
    return Math.floor(Math.random() * 255)
}

class Header extends React.Component {
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
            <header>
                <h1 onClick={this.discoStyle} style={{ color: this.state.color }}>{this.state.title}</h1>
                <input type="text" value={this.state.title} onChange={ this.handleChange } />
                <br />
                <button onClick={this.changeToBlue}>Click Me To Change To Blue</button>
            </header>
        )
    }
}

export default Header;