import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
        <nav className="nav-wrapper blue">
            <NavLink to="/" className="center brand-logo">Post List</NavLink>
            </nav>
        </div>
    )
}
