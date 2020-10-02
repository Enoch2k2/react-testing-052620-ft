import React from 'react'
import PetCard from '../components/PetCard';

const PetList = ({ pets }) => {
  
  const petList = pets.map((pet, i) => <PetCard key={i} pet={pet} />)
  return (
      <div>
        <h3>Pet List</h3>
        <ul>
          { petList }
        </ul>
      </div>
  )
}

export default PetList
