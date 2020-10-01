import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/pets/new">Create Pet</NavLink></li>
                    <li><NavLink to="/pets">List Pets</NavLink></li>
                </ul>
            </nav>
        )

export default Nav
