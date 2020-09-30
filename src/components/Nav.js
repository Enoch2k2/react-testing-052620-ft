import React from 'react'

const Nav = ({ onView }) => (
            <nav>
                <ul>
                    <li onClick={ () => onView('form') }>Create Pet</li>
                    <li onClick={ () => onView('list') }>List Pets</li>
                </ul>
            </nav>
        )

export default Nav
