import React, { useState } from "react";
import logo from '../assets/logo1.png'

const Navbar = ({setShowLogin}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="relative text-white font-bold px-10 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand Name */}
                <a href="#home"><img src={logo} alt="" className="w-24 md:ml-10"/></a>
                {/* Toggle Button (Visible on Small Screens) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            // Hamburger Icon
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            // Close Icon
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Links (Visible on Medium Screens and Above) */}
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="hover:text-red-400 px-4">Home</a>
                    <a href="#school" className="hover:text-red-400 px-4">Our School</a>
                    <a href="#student" className="hover:text-red-400 px-4">Our Student</a>
                    <a href="#about" className="hover:text-red-400 px-4">About Us</a>
                    <a href="#contact" className="hover:text-red-400 px-4">Contact</a>
                </div>
            </div>

            {/* Mobile Menu (Visible When isOpen is True) */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="home"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                            Home
                        </a>
                        <a
                            href="#school"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                            Our School
                        </a>
                        <a
                            href="#student"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                            Our Students
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                            About us
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;