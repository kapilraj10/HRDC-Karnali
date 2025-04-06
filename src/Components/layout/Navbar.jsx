import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import hospitalLogo from "../../assets/images/hospital-logo.png";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation(); 

  
    const getActiveClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={hospitalLogo}
                        alt="HRDC Karnali Province"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-content-wrapper d-flex justify-content-between w-100">
                        <ul className="navbar-nav nav-links">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${getActiveClass("/")}`}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={`nav-link ${getActiveClass("/about")}`}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/impact" className={`nav-link ${getActiveClass("/impact")}`}>
                                    Our Impact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className={`nav-link ${getActiveClass("/gallery")}`}>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/campaigns" className={`nav-link ${getActiveClass("/campaigns")}`}>
                                    Campaign Center
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notice" className={`nav-link ${getActiveClass("/notice")}`}>
                                    Notice
                                </Link>
                            </li>
                        </ul>

                        <div className="auth-buttons d-flex">
                            <Link
                                to="/Login"
                                className={`btn btn-warning me-2 ${getActiveClass("/Login")}`}
                            >
                                Login
                            </Link>
                            <Link 
                                className={`btn btn-warning ${getActiveClass("/Signup")}`}
                                 to="/Signup"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
