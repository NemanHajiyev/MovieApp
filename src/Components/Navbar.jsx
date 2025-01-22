import React, { useState } from 'react';
import '../Css/Navbar.css';
import { Link } from 'react-router-dom';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";



const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.className = darkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <div className={`Navbar ${darkMode ? 'dark' : 'light'}`}>
            <Link className='link' to="/"><h1>MovieX</h1></Link>
            <div className='navbar-right'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/favorie">Favorie</Link>
                <button onClick={toggleTheme} className="theme-toggle">
                    {darkMode ? <CiLight /> : <CiDark />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
