import React, { useState } from 'react'

const PetForm = ({ addPet, history }) => {

    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        const strongParams = {
            pet: { name, species }
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
                addPet(pet)
                history.push('/pets') // redirects to /pets
            })
    }

    return (
        <div>
            <h3>Create Pet</h3>

            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={ name } onChange={ e => setName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="species">Species: </label>
                    <input type="text" name="species" id="species" value={ species } onChange={ e => setSpecies(e.target.value) } />
                </div>

                <input type="submit" value="Create Pet" />
            </form>
        </div>
    )
}

export default PetForm
