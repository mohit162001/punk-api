import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h3>PUNK API</h3>
            </Link>
        </div>
    )
}

export default Nav
