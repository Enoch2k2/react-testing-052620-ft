import React, { Component } from 'react'

export class PetShow extends Component {
    state = {
        pet: {},
        loading: true
    }

    componentDidMount() {
        const pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id, 10))
        if(pet) {
            this.setState({
                pet,
                loading: false
            })
        }
    }

    render() {
        if(this.state.loading) {
            return <p>Loading....</p>
        }
        return (
            <div>
                <p>Pet Name is { this.state.pet.name  }</p>
                <p>Pet Species is { this.state.pet.species }</p>
            </div>
        )
    }
}

export default PetShow
