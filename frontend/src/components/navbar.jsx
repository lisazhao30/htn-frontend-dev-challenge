import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/"><a href="#/" className="btn btn-ghost normal-case text-xl">Hack the North</a></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <Link to="/login"><li><a href="#/">Login</a></li></Link>
                    <Link to="/register"><li><a href="#/">Sign Up</a></li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar