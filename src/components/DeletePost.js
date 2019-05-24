import React from 'react'
import {NavLink} from 'react-router-dom'
export default function DeletePost() {
    return (
        <div className="container">
            <h1> Post deleted successfully</h1>
            <NavLink to='/'>
            <button className="btn waves-effect blue">Go Home </button>
            </NavLink>
        </div>
    )
}
