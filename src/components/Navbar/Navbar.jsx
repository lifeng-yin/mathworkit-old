import React from "react";
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import './Navbar.css';
import { useAuth } from "../../contexts/Auth";

const Navbar = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <nav>
            <a href="/" className="logo">Mathworkit</a>
            <ul>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
            {user ? <a className="settings-link" href="/settings">Settings</a> : <div className="buttons">
                <Button type="secondary" href="/login">Log In</Button>
                <Button type="primary" href="/signup">Sign Up</Button>
            </div>}
        </nav>
    )
}

export default Navbar;