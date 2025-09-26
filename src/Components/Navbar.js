import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate()
    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white shadow fixed top-0 w-[100%] z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <svg
                                className="h-10 mr-2"
                                width="40"
                                height="40"
                                viewBox="0 0 51 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                                        fill="#76A9FA"
                                    />
                                    <path
                                        d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                                        fill="#A4CAFE"
                                    />
                                    <path
                                        d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                                        fill="#1C64F2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="51" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-xl font-bold text-primary">Sellandiamman Traders</span>
                        </a>
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <span onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                            Home
                        </span>

                        {/* Dropdown */}
                        <div className="relative group" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-blue-600"
                            >
                                Products
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-md">
                                    <span
                                        onClick={() => navigate('/switches')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Switches
                                    </span>
                                    <span
                                        onClick={() => navigate('/pvcfittings')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    >
                                        PVC Fittings
                                    </span>
                                    {/* <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        UPVC Fittings
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        CPVC Fittings
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        GI Fittings
                                    </a> */}
                                </div>
                            )}
                        </div>

                        <a href="#getquot" className="text-gray-700 hover:text-blue-600">
                            Get Quote
                        </a>
                        <a href="#aboutus" className="text-gray-700 hover:text-blue-600">
                            About Us
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Items */}
                {menuOpen && (
                    <div className="md:hidden mt-2 space-y-2 pb-4">
                        <span onClick={() => navigate('/')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                            Home
                        </span>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            Products
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="pl-6 space-y-1">
                                <span onClick={() => navigate('/switches')}
                                    className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2">
                                    Switches
                                </span>
                                {/* <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2">
                                    PVC Fittings
                                </a>
                                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2">
                                    UPVC Fittings
                                </a>
                                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2">
                                    CPVC Fittings
                                </a>
                                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2">
                                    GI Fittings
                                </a> */}
                            </div>
                        )}
                        <a href="#getquot" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            Get Quote
                        </a>
                        <a href="#aboutus" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            About Us
                        </a>
                        <a href="#contactz" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
