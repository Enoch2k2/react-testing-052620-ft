import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 onClick={this.props.handleClick} style={{ color: this.props.color }}>{this.props.title}</h1>
            </header>
        )
    }
}

export default Header;