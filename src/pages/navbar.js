import React, { useState } from "react";
import './css/navBar.css';
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; 

import Login from './login';
import Registration from "./registration";

const Navbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToMovies = () => {
        navigate("/movies");
    };

    const navigateToTV = () => {
        navigate("/tv");
    };

    const navigateToFree = () => {
        navigate("/free");
    };

    const navigateToMyFrame = () => {
        navigate("/myFrame");
    }


    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    return (
        <nav className="navbar">
            <div className="left-nav">
                <ul>
                    <li><button className="icon" onClick={navigateToHome}>FRAME</button></li>
                    <li><button onClick={navigateToMovies}>Movies</button></li>
                    <li><button onClick={navigateToTV}>TV</button></li>
                    <li><button onClick={navigateToFree}>Free</button></li>
                    <li><button onClick={navigateToMyFrame}>My Frame</button></li>
                </ul>
            </div>
            <div className="right-nav">
                <ul>
                    <li><button>Redeem</button></li>
                    <li><button onClick={toggleLogin}>Sign In</button></li>
                    <li><button><FaSearch /></button></li>
                </ul>
            </div>

            {showLogin && <Login onClose={closeLogin} />}
            {showLogin && <Registration onClose={closeLogin} />}
        </nav>
    );
};

export default Navbar;
