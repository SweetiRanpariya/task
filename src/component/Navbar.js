import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <Link className="navbar-brand" to="/Home">Logo</Link>
            

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Table">Table</Link>
                </li>
                
            </ul>
            </nav>
        </div>
    )
}
