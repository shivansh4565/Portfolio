import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollAndClose = () => setIsOpen(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-black backdrop-blur-md text-white shadow-md rounded-xl">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-2xl font-bold tracking-wide hover:text-indigo-400 transition-colors duration-300"
                >
                    Shivansh
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                    <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
                    <a href="#about" className="hover:text-indigo-400 transition">About Me</a>
                    <a href="#services" className="hover:text-indigo-400 transition">Services</a>
                    <a href="#portfolio" className="hover:text-indigo-400 transition">Portfolio</a>
                    <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                </div>

                {/* Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        onClick={scrollAndClose}
                        className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md 
                bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 hover:scale-105"
                    >
                        Connect With Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col space-y-1 focus:outline-none"
                >
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 text-center py-4 space-y-4">
                    <a href="#hero" onClick={scrollAndClose} className="block hover:text-indigo-400">Home</a>
                    <a href="#about" onClick={scrollAndClose} className="block hover:text-indigo-400">About Me</a>
                    <a href="#services" onClick={scrollAndClose} className="block hover:text-indigo-400">Services</a>
                    <a href="#portfolio" onClick={scrollAndClose} className="block hover:text-indigo-400">Portfolio</a>
                    <a href="#contact" onClick={scrollAndClose} className="block hover:text-indigo-400">Contact</a>
                    <a
                        href="#contact"
                        onClick={scrollAndClose}
                        className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md 
                    bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-500 hover:scale-105"
                    >
                        Connect With Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
