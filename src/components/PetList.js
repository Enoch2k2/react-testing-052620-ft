import React, { Component } from 'react'
import PetCard from './PetCard';

class PetList extends Component {
    render() {
        const pets = this.props.pets.map((pet, i) => <PetCard key={i} pet={pet} />)
        return (
            <div>
              <h3>Pet List</h3>
              <ul>
                { pets }
              </ul>
            </div>
        )
    }
}

export default PetList
