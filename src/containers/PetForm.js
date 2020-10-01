import React, { Component } from 'react'

class PetForm extends Component {

    state = {
        name: "",
        species: ""
    }

    handleSubmit(e) {
        e.preventDefault();

        const strongParams = {
            pet: this.state
        }
        
        fetch('http://localhost:3001/pets', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(strongParams)
        })
            .then( resp => resp.json() )
            .then( pet => {
                this.props.addPet(pet)
                this.props.history.push('/pets') // redirects to /pets
            })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Create Pet</h3>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="species">Species: </label>
                        <input type="text" name="species" id="species" value={this.state.species} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Create Pet" />
                </form>
            </div>
        )
    }
}

export default PetForm
