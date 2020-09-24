import React, { Component } from 'react'

class PetCard extends Component {
    render() {
        const { name, species } = this.props.pet;
        debugger;
        return (
            <li>
               { name } - { species }
            </li>
        )
    }
}

export default PetCard
