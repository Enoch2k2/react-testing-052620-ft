import React from 'react'
import { NavLink } from 'react-router-dom';

const PetCard = ({ pet }) => <li><NavLink to={`/pets/${pet.id}`}>{ pet.name }</NavLink></li>

export default PetCard;