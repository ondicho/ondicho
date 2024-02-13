import React from 'react';
import '../assets/css/navbar.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import useToggle from '../hooks/UseToggle';

const Navbar = () => {
    const [navbarOpen, toggleNavbar] = useToggle(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <p>Ondicho</p>
                </div>
                <button className="toggle-btn" onClick={toggleNavbar}>
                    {navbarOpen ? <FiX /> : <FiMenu />}
                </button>
                <div className={`navbar-menu ${navbarOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={toggleNavbar}>
                        <FiX />
                    </button>
                    <ul>
                        <li className='menu-item'><Link to="/">Home</Link></li>
                        <li className='menu-item'><Link to="#portfolio">Portfolio</Link></li>
                        <li className='menu-item'><Link to="/cv">CV</Link></li>
                        <li className='menu-item'><Link to="/contact">Get In Touch</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
