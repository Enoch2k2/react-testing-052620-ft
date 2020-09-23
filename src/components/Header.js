import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h3>{this.props.title}</h3>
            </header>
        )
    }
}

export default Header;