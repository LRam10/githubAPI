import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    
        return (
            <nav className="navbar navbar-exapnds-lg bg-light mb-3">
                <a className="navbar-brand text-dark" href="#">Welcome <i className="fab fa-github"></i></a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            </nav>
        )
}

export default Navbar
