const addPets = (pets) => {
    return {
        type: "ADD_PETS",
        pets
    }
}

const addPet = (pet) => {
    return {
        type: "ADD_PET",
        pet
    }
}

export const fetchPets = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/pets')
            .then( resp => resp.json() )
            .then( pets => dispatch(addPets(pets)))
    }
}

export const createPet = (petData, history) => {
    return (dispatch) => {
        fetch('http://localhost:3001/pets', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petData)
        })
            .then( resp => resp.json() )
            .then( pet => {
                dispatch(addPet(pet))
                history.push('/pets') // redirects to /pets
            })
    }
}