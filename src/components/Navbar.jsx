// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../constants'; // Adjust the path if necessary

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img className="h-10 w-10 mr-2" src="src/assets/parking-logo.png" alt="Logo" />
                        </Link>
                        <span className="text-xl tracking-tight">Parking App</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.href} className="text-gray-800 hover:text-blue-500">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <Link to="/login" className="py-2 px-3 border rounded-md">
                            Sign In
                        </Link>
                        <Link
                            to="/register"
                            className="bg-gradient-to-r from-blue-500 to-light-blue-800 py-2 px-3 rounded-md ml-2">
                            Create an account
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed bg-white right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link to={item.href} className="text-gray-800 hover:text-blue-500">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <Link to="/login" className="py-2 px-3 border rounded-md">
                                Sign In
                            </Link>
                            <Link to="/register" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-light-blue-800">
                                Create an account
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
