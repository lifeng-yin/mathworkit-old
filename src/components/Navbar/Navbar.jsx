import React from "react";
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <a className="logo">Mathworkit</a>
            <ul>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
            <div className="buttons">
                <Button type="secondary" href="/login">Log In</Button>
                <Button type="primary" href="/signup">Sign Up</Button>
            </div>
        </nav>
    )
}

export default Navbar;