import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="has-background-grey-lighter is-flex is-flex-direction-column is-justify-content-space-evenly is-align-items-center" style={{ height: "100%", width: "100%" }}>
            <div className="nav-user-details">
                <div className="profile-pic">AT</div>
                <div className="username" style={{ textAlign: "center" }}>Agrim Das Tuladhar</div>
            </div>
            <NavLink to="/" className="nav-link" exact
                activeClassName="active-nav-link">Feeds</NavLink>
            <NavLink to="/projects" className="nav-link" exact
                activeClassName="active-nav-link">My Projects</NavLink>
            <NavLink to="/blogs" className="nav-link" exact
                activeClassName="active-nav-link">My Blogs</NavLink>
            <NavLink to="/dashboard" className="nav-link" exact
                activeClassName="active-nav-link">Dashboard</NavLink>
            <NavLink to="/admin" className="nav-link" exact
                activeClassName="active-nav-link">Admin</NavLink>
        </div>
    )
};

export default Navbar;