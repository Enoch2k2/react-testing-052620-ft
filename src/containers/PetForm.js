import React, { Component } from 'react'

class PetForm extends Component {

    state = {
        name: "",
        species: ""
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addPet(this.state)

        this.setState({
            name: "",
            species: ""
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
