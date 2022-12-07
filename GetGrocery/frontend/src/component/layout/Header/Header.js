import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">
                Go Grocery
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeMenu}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link" onClick={closeMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={closeMenu}>
                        User
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;