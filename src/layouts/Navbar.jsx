import React from 'react';
import '../assets/css/navbar.css';
import { NavLink } from 'react-router-dom';
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
                {!navbarOpen && (
                    <button className="toggle-btn" onClick={toggleNavbar}>
                        <FiMenu />
                    </button>
                )}
                <div className={`navbar-menu ${navbarOpen ? 'open' : ''}`}>
                    {navbarOpen && (
                        <button className="close-btn" onClick={toggleNavbar}>
                            <FiX />
                        </button>
                    )}
                    <ul>
                        <li className='menu-item'><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                        <li className='menu-item'><NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink></li>
                        <li className='menu-item'><NavLink to="/cv" activeClassName="active-link">CV</NavLink></li>
                        <li className='menu-item'><NavLink to="/contact" activeClassName="active-link">Get In Touch</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
