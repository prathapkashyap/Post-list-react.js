import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Update({title,body}) {
    return (
        <div  className="container">
            <h4> {title} </h4>
            <p> {body}</p>
            <br/>
            <NavLink to="/"> <button className="btn"> Go Home</button></NavLink>
        </div>
    )
}
